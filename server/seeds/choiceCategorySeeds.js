const {ChoiceCategory, ChoiceOption, MenuItem, Category} = require('../db/models')
const faker = require('faker')

const floor = function (random) {
  return Math.floor(random);
}

const random = function (min = 0, max) {
  return (Math.random() * ( max - min + 1 )) + min;
}

const choiceCategorySeed = async () => {
  try {
    const categories = ['Choose a Style', 'Choose an Item', 'Would you like guacamole?']
    const data = []

    for (let i = 0; i < 3; i++) {
      data.push({
        name: categories[i],
        restaurantId: 1
      })
    }

    await ChoiceCategory.bulkCreate(data, {returning: true})

    await ChoiceOption.create({
      name: 'Whole Wheat Tortilla',
      price: 1.5,
      choiceCategoryId: 1
    })

    await Category.create({
      name: 'Tacos',
      restaurantId: 1,
    })

    const item = await MenuItem.create({
      name: 'Fish Tacos',
      price: 10,
      restaurantId: 1,
      categoryId: 1
    })

    const category = await ChoiceCategory.findById(1)

    await category.setMenuItems(item)

    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.log(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = choiceCategorySeed
