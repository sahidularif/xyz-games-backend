
// const JwtStrategy = require('passport-jwt').Strategy;
// const ExtractJwt = require('passport-jwt').ExtractJwt;
// const mongoose = require('mongoose');
// const User = require('../models/User');
// const keys = require('../config/keys');

// const options = {};
// options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// options.secretOrKey = keys.secretOrKey;

// module.exports = passport => {
//   passport.use(new JwtStrategy(options, (jwt_payload, done) => {
//     console.log(jwt_payload);
//     User.findById(jwt_payload.id)
//       .then(user => {
//         if (user) {
//           // return the user to the frontend
//           return done(null, user);
//         }
//         // return false since there is no user
//         return done(null, false);
//       })
//       .catch(error => console.log(error));
//   }));
// };

const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const mongoose = require('mongoose')
const User = mongoose.model('users')
const keys = require('../config/keys')

const options = {}

options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.JWT_SECRET;

module.exports = passport => {
  passport.use( new JwtStrategy(options, (jwt_payload, done) => {
    done();
  }))
}