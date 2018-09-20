const router = require('express').Router()
const {Restaurant, MenuItem, Category, ChoiceCategory} = require('../db/models')

router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Category,
          include: [{model: MenuItem, include: [{model: ChoiceCategory}]}]
        },
        {
          model: MenuItem,
          include: [{model: ChoiceCategory}]
        }
      ]
    })
    res.json(restaurant)
  } catch (err) {
    next(err)
  }
})

router.get('/slug/:slug', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: {
        slug: req.params.slug
      },
      include: [
        {
          model: Category,
          include: [{model: MenuItem}]
        },
        {
          model: MenuItem,
          include: [{model: ChoiceCategory}]
        }
      ]
    })
    res.json(restaurant)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const newProduct = await Product.create(req.body)
//     if (newProduct) {
//       res.json(newProduct)
//     } else {
//       res.sendStatus(400)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// router.delete('/:id', async (req, res, next) => {
//   try {
//     const deletedProduct = await Product.destroy({
//       wehre: {
//         id: req.params.id
//       }
//     })
//     if (deletedProduct) {
//       res.sendStatus(204)
//     }
//   } catch (err) {
//     next(err)
//   }
// })

// router.put('/:id', async (req, res, next) => {
//   const [, affectedRows] = await Product.update(req.body, {
//     where: {
//       id: req.params.id
//     },
//     returning: true
//   })
//   res.json(affectedRows[0])
// })

module.exports = router
