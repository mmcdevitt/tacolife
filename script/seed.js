'use strict'

const db = require('../server/db')

const {User, Roles} = require('../server/db/models')
const restaurantSeed = require('../server/seeds/restaurantSeeds')
const menuSeed = require('../server/seeds/menuSeeds')
const roleSeed = require('../server/seeds/roleSeeds')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  // const users = await Promise.all([
  //   User.create({
  //     firstName: 'Michael', 
  //     lastName: 'McDevitt', 
  //     username: 'mmcdevi1', 
  //     email: 'mmcdevi1@gmail.com', 
  //     password: 'password',
  //   }
  // ])

  const user = await User.create({
    firstName: 'Michael', 
      lastName: 'McDevitt', 
      username: 'mmcdevi1', 
      email: 'mmcdevi1@gmail.com', 
      password: 'password',
      superAdmin: true,
  })
  
  // await user.setRoles(await Roles.findById(1))

  console.log(`seeded ${user.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
    await restaurantSeed()
    await menuSeed()
    await roleSeed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
