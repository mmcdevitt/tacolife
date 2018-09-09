const router = require('express').Router()
const passportService = require('./passport')
const passport = require('passport')
const User = require('../db/models/user')
const jwt = require('jwt-simple');
const keys = require('../../config/keys');
const {Roles, Restaurant} = require('../db/models')

function sessionsToken (user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.tokenKey)
}

const requireLogin     = passport.authenticate('local', { session: false });
const authenticateUser = passport.authenticate('jwt',   { session: false });

router.post('/login', requireLogin, (req, res, next) => {
  if (!req.user) {
    res.send({error: 'No user'})
  }

  res.send({token: sessionsToken(req.user), user: req.user})
})

router.post('/register', async (req, res, next) => {
  const { email, password, username } = req.body;

  // // Require email, password and username
  if (!email || !password || !username) {
    return res.status(422).send({ error: 'Email, password and username are required!' })
  }

  // Create new user
  User.create(req.body)
    .then(user => {
      res.send({ token: sessionsToken(user), user });
    })
    .catch(err => {
      // Sends error if user exists
      return next(err)
    })
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', authenticateUser, (req, res) => {
  // res.json(req.user)

  User
    .findOne({
      where: {
        id: req.user.id
      },
      include: [
        {model: Roles},
        {model: Restaurant}
      ]
    })
    .then(user => {
      res.json(user)
    })
    .catch(err => console.log(err))
})

router.use('/google', require('./google'))


module.exports = router