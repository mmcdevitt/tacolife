const User = require('./user')
const Restaurant = require('./restaurant')
const Category = require('./category')
const MenuItem = require('./menuItem')

// Relationships
User.belongsToMany(Restaurant, {through: 'userrestaurant'})
Restaurant.belongsToMany(User, {through: 'userrestaurant'})

Category.belongsTo(Restaurant);
Restaurant.hasMany(Category);

MenuItem.belongsTo(Restaurant);
Restaurant.hasMany(MenuItem);

MenuItem.belongsTo(Category);
Category.hasMany(MenuItem);

module.exports = {
  User,
  Restaurant,
  Category,
  MenuItem,
}