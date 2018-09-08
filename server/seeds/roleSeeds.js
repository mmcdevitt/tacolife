const {Roles, User} = require('../db/models')

const roleSeed = async () => {
  try {
    const data = [
      {name: 'super admin'},
      {name: 'admin'},
      {name: 'restaurant owner'},
      {name: 'restaurant employee'},
      {name: 'default user'}
    ]

    await Roles.bulkCreate(data, {returning: true})
    const user = await User.findById(1)
    await user.setRoles(await Roles.findById(1))
    console.log('[SUCCESS]: Database synced successfully.')
  } catch (err) {
    console.log('[ERROR]: Database not synced successfully.')
    console.log(err)
  } finally {
    console.log('Shutting genre connection')
    console.log('Genre db closed')
  }
}

module.exports = roleSeed
