const Sequelize = require('sequelize')
const db = require('../db')

const ChoiceCategory = db.define('choiceCategory', {
  name: { 
    type: Sequelize.STRING, 
    allowNull: false 
  }
})

module.exports = ChoiceCategory