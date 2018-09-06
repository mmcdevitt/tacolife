const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;
const keys = require('../../config/keys');

const User = require('../db/models/user');

// Create Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    User
      .findOne({
        where: {
          email
        }
      })
      .then(user => {
        if (!user) { return done(null, false, { message: 'Invalid email address or password.' }) }

        user.comparePassword(password, function (err, isMatch) {
          if (err) { return done(err) }
          if (!isMatch) { return done(null, false) }

          // If user exists and passwords match
          return done(null, user);
        })
      })
      .catch(err => {
        if (err) { return done(err) }
      })
  }
))

// Create JSON Web Token (JWT) Strategy for authentication after login/register
passport.use(new JwtStrategy(
  {
    // Required by the JWT Strategy for Passport
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: keys.tokenKey
  },
  function (payload, done) {
    // Find User
    User.findById(payload.sub)
      .then(user => {
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      })
      .catch(err => {
        if (err) { return done(err, false) }
      })
  }
));