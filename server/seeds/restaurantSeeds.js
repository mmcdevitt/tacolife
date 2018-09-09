const {Restaurant, User} = require('../db/models')
const faker = require('faker')
const _ = require('lodash')

const restaurantSeed = async () => {
  try {
    const RestaurantData = []

    for (let i = 0; i < 100; i++) {
      let name = faker.company.companyName()
      RestaurantData.push({
        name,
        city: `${faker.address.city()}`,
        state: `${faker.address.state()}`,
        zipcode: faker.address.zipCode(),
        street: faker.address.streetAddress(),
        slug: _.kebabCase(name)
      })
    }

    await Restaurant.create({
      name: 'Tacos for Life',
      city: 'New York',
      state: 'NY',
      zipcode: '10001',
      street: '590 Madison Avenue',
      slug: _.kebabCase('Tacos for Life')
    })
    await Restaurant.bulkCreate(RestaurantData, {returning: true})
    const user = await User.findById(2)
    await user.setRestaurants(await Restaurant.findById(1))
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
