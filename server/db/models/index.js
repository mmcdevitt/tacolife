const User = require('./user')
const Restaurant = require('./restaurant')
const Category = require('./category')
const MenuItem = require('./menuItem')
const Cart = require('./cart')
const CartItems = require('./cartItems')
const Roles = require('./roles')
const ChoiceCategory = require('./choiceCategory')
const ChoiceOption = require('./choiceOption')

// Relationships
User.belongsToMany(Restaurant, {through: 'userrestaurant'})
Restaurant.belongsToMany(User, {through: 'userrestaurant'})

Category.belongsTo(Restaurant);
Restaurant.hasMany(Category);

MenuItem.belongsTo(Restaurant);
Restaurant.hasMany(MenuItem);

MenuItem.belongsTo(Category);
Category.hasMany(MenuItem);

// Choice Categories 

ChoiceCategory.belongsTo(Restaurant)
Restaurant.hasMany(ChoiceCategory)

ChoiceOption.belongsTo(ChoiceCategory);
ChoiceCategory.hasMany(ChoiceOption);

ChoiceCategory.belongsToMany(MenuItem, {through: 'menuItemChoice'})
MenuItem.belongsToMany(ChoiceCategory, {through: 'menuItemChoice'})

// Cart

Cart.belongsTo(User)
User.hasMany(Cart)

CartItems.belongsTo(Cart, {onDelete: 'cascade'})
Cart.hasMany(CartItems)

CartItems.belongsTo(MenuItem)
MenuItem.hasMany(CartItems)

CartItems.belongsTo(User)
User.hasMany(CartItems)

Roles.belongsToMany(User, {through: 'userrole'})
User.belongsToMany(Roles, {through: 'userrole'})

module.exports = {
  User,
  Restaurant,
  Category,
  MenuItem,
  Cart,
  CartItems,
  Roles,
  ChoiceCategory,
  ChoiceOption,
}