const router = require('express').Router()
const {Category} = require('../db/models')
const passportService = require('../auth/passport')
const passport = require('passport');
const authenticateUser = passport.authenticate('jwt', { session: false });
module.exports = router

router.get('/', authenticateUser, (req, res, next) => {
  Category
    .findById(parseInt(req.query.id))
    .then(category => {
      res.send(category)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/', authenticateUser, (req, res, next) => {
  Category
    .create(req.body)
    .then(category => {
      res.send(category)
    })
    .catch(err => {
      next(err)
    })
})
