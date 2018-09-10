const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/restaurants', require('./restaurants'))
router.use('/cart', require('./carts'))
router.use('/cart_items', require('./cartItems'))
router.use('/menu_items', require('./menuItem'))
router.use('/categories', require('./category'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
