const Sequelize = require('sequelize')
const db = require('../db')

const ChoiceOption = db.define('choiceOption', {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
  price: {
    type: Sequelize.DECIMAL, 
    allowNull: false 
  }
})

module.exports = ChoiceOption