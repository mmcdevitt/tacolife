const {Restaurant} = require('../db/models')
const faker = require('faker')

const restaurantSeed = async () => {
  try {
    const RestaurantData = []

    for (let i = 0; i < 100; i++) {
      RestaurantData.push({
        name: `${faker.company.companyName()}`,
        city: `${faker.address.city()}`,
        state: `${faker.address.state()}`,
        zipcode: faker.address.zipCode(),
        street: faker.address.streetAddress(),
      })
    }

    await Restaurant.bulkCreate(RestaurantData, {returning: true})
    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.log(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = restaurantSeed
