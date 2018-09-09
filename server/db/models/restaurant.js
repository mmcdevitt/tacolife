const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },

  imageUrl: { 
    type: Sequelize.STRING, 
    defaultValue: 'string'
  },

  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  zipcode: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  description: {
    type: Sequelize.TEXT
  },

  slug: {
    type: Sequelize.TEXT
  }
})

module.exports = Restaurant