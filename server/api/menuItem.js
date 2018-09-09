const router = require('express').Router()
const {MenuItem} = require('../db/models')
const passportService = require('../auth/passport')
const passport = require('passport');
const authenticateUser = passport.authenticate('jwt', { session: false });
module.exports = router

router.post('/', authenticateUser, (req, res, next) => {
  MenuItem.create(req.body)
    .then(item => {
      res.json(item)
    })
    .catch(err => {
      next(err)
    })
})

