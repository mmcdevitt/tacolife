const User = require('./user')
const Restaurant = require('./restaurant')
const Category = require('./category')
const MenuItem = require('./menuItem')
const Cart = require('./cart')
const CartItems = require('./cartItems')

// Relationships
User.belongsToMany(Restaurant, {through: 'userrestaurant'})
Restaurant.belongsToMany(User, {through: 'userrestaurant'})

Category.belongsTo(Restaurant);
Restaurant.hasMany(Category);

MenuItem.belongsTo(Restaurant);
Restaurant.hasMany(MenuItem);

MenuItem.belongsTo(Category);
Category.hasMany(MenuItem);

Cart.belongsTo(User)
User.hasMany(Cart)

CartItems.belongsTo(Cart, {onDelete: 'cascade'})
Cart.hasMany(CartItems)

CartItems.belongsTo(MenuItem)
MenuItem.hasMany(CartItems)

CartItems.belongsTo(User)
User.hasMany(CartItems)

module.exports = {
  User,
  Restaurant,
  Category,
  MenuItem,
  Cart,
  CartItems,
}