const passport = require('passport')
const router = require('express').Router()
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const {User} = require('../db/models')
const keys = require('../../config/keys')
const jwt = require('jwt-simple');
module.exports = router

function sessionsToken (user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, keys.tokenKey)
}

const googleConfig = {
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
  callbackURL: keys.google.redirectDomain,
}

const strategy = new GoogleStrategy(
  googleConfig,
  (token, refreshToken, profile, done) => {
    console.log(profile)
    const googleId = profile.id
    const name = profile.displayName
    const email = profile.emails[0].value

    User.
      findOrCreate({
      where: {
        email
      },
      defaults: {
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        username: email,
        email
      }
    })
      .then(([user]) => done(null, user))
      .catch(done)
  }
)

passport.use(strategy)

router.get('/', passport.authenticate('google', {scope: 'email'}), 
  (req, res) => {
    console.log('HELLO')
  }
)

router.get(
  '/callback',
  passport.authenticate('google', {
    // successRedirect: '/home',
    failureRedirect: '/login'
  }),
  (req, res) => {
    const token = 'token'
    res.redirect('/oauthredirect?token=' + sessionsToken(req.user))
  }
)


