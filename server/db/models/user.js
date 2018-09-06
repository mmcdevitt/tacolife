const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')
const bluebird = require("bluebird");
const bcrypt = bluebird.promisifyAll(require('bcrypt-nodejs'));

const User = db.define('user', {
  firstName: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },
  lastName: { 
    type: Sequelize.STRING, 
    allowNull: false 
  },  
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
})

User.beforeCreate(function (user, options,) {
  return bcrypt.genSaltAsync(10)
    .then(function (salt) {
      return bcrypt.hashAsync(user.password, salt, null)
    })
    .then(function (hash) {
      user.password = hash
    })
    .catch(function (err) {
      return db.Promise.reject(err)
    })
})

// Compare user input password on login to the encrypted password
User.prototype.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, res) {
    if (err) { return callback(err) }

    callback(null, res);
  })
}

module.exports = User