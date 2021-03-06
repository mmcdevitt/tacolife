const {MenuItem} = require('../db/models')
const faker = require('faker')

const floor = function (random) {
  return Math.floor(random);
}

const random = function (min = 0, max) {
  return (Math.random() * ( max - min + 1 )) + min;
}

const menuItemSeed = async () => {
  try {
    const data = []

    for (let i = 0; i < 100; i++) {
      data.push({
        name: faker.company.companyName(),
        price: parseFloat(parseFloat(random(0, 50)).toFixed(2)),
        restaurantId: floor(random(1,10))
      })
    }

    await MenuItem.bulkCreate(data, {returning: true})
    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.log(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = menuItemSeed
