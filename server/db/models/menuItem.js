const Sequelize = require('sequelize')
const db = require('../db')

const MenuItem = db.define('menuItem', {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
})

module.exports = MenuItem