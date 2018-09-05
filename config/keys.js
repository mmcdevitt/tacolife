// keys.js 

if (process.env.NODE_ENV === 'production') {
  // production mode
  module.exports = require('./production');
} else {
  // development mode
  module.exports = require('./dev');
}