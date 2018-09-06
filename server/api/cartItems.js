const router = require('express').Router()
const {CartItems, MenuItem} = require('../db/models')
const passportService = require('../auth/passport')
const passport = require('passport');
const authenticateUser = passport.authenticate('jwt', { session: false });
module.exports = router

router.post('/', authenticateUser, (req, res, next) => {
  CartItems.create(req.body)
    .then(item => {
      CartItems.findOne({
        where: {
          id: item.id
        },
        include: [
          {
            model: MenuItem
          }
        ]
      }).then(newItem => {
        res.send(newItem)
      })
    })
    .catch(err => {
      next(err)
    })
})

router.delete('/:id', authenticateUser, (req, res, next) => {
  CartItems.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
      res.status(204).end()
    })
    .catch(err => {
      next(err)
    })
})

router.put('/:id', authenticateUser, (req, res, next) => {
  CartItems.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {
        model: MenuItem
      }
    ]
  })
    .then(item => {
      item.update(req.body)
      res.send({message: 'Item updated.', item})
    })
    .catch(err => {
      return next(err)
    })
})
