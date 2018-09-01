const User = require('./user')
const Restaurant = require('./restaurant')
const Category = require('./category')
const Item = require('./item')

// Relationships
User.belongsToMany(Restaurant, {through: 'userrestaurant'})
Restaurant.belongsToMany(User, {through: 'userrestaurant'})

Category.belongsTo(Restaurant);
Restaurant.hasMany(Category);

Item.belongsTo(Restaurant);
Restaurant.hasMany(Item);

Item.belongsTo(Category);
Category.hasMany(Item);

module.exports = {
  User,
  Restaurant,
  Category,
  Item,
}