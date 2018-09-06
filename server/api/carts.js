const router = require('express').Router()
const {Cart, CartItems, MenuItem} = require('../db/models')
const passportService = require('../auth/passport')
const passport = require('passport');
const authenticateUser = passport.authenticate('jwt', { session: false });
module.exports = router

router.get('/', authenticateUser, (req, res, next) => {
  Cart.findById(parseInt(req.query.id))
    .then(cart => {
      res.send(cart)
    })
    .catch(err => {
      next(err)
    })
})

router.post('/', authenticateUser, (req, res, next) => {
  Cart.findOrCreate({
    where: {
      userId: req.user.id
    },
    include: [
      {
        model: CartItems,
        include: [{model: MenuItem}]
      }
    ]
  })
    .then(cart => {
      res.send(cart)
    })
    .catch(err => {
      next(err)
    })
})
