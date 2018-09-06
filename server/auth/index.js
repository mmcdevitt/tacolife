const router = require('express').Router()
const passportService = require('./passport')
const passport = require('passport')
const User = require('../db/models/user')
const jwt = require('jwt-simple');
const keys = require('../../config/keys');

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

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', authenticateUser, (req, res) => {
  res.json(req.user)
})

router.use('/google', require('./google'))


module.exports = router