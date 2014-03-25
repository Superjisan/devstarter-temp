'use strict';

var mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GitHubStrategy = require('passport-github').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    LinkedinStrategy = require('passport-linkedin').Strategy,
    User = mongoose.model('User'),
    config = require('./config');

module.exports = function(passport) {

    // Serialize the user id to push into the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // Deserialize the user object based on a pre-serialized token
    // which is the user id
    passport.deserializeUser(function(id, done) {
        User.findOne({
            _id: id
        }, '-salt -hashed_password', function(err, user) {
            done(err, user);
        });
    });



    // Use github strategy
    passport.use(new GitHubStrategy({
            clientID: config.github.clientID,
            clientSecret: config.github.clientSecret,
            callbackURL: config.github.callbackURL,
            passReqToCallback: true
        },
        function(req, accessToken, refreshToken, profile, done) {
        	console.log(profile);
            User.findOne({
                'github.id': profile.id
            }, function(err, github) {
                if (!github) {
                    // console.log(req.user)
                 User.findOne({ 'linkedin.id' : req.user.linkedin.id},
                    function(err, user){
                      if(err) console.log(err);
                        user.github = profile._json;
                        user.developer = true;
                        console.log(user);
                        user.save(function(err){
                            if(err) console.log(err);
                            return done(err, github)
                        }
                      )
                    }
                 )}
                else {
                    return done(err, github);
                }
            });
        }
    ));



    // use linkedin strategy
    passport.use(new LinkedinStrategy({
            consumerKey: config.linkedin.clientID,
            consumerSecret: config.linkedin.clientSecret,
            callbackURL: config.linkedin.callbackURL,
            profileFields: config.linkedin.profileFields
        },
        function(accessToken, refreshToken, profile, done) {
        	console.log(profile);
            User.findOne({
                'linkedin.id': profile.id
            }, function(err, user) {
                if (!user) {
                    user = new User({
                        name: profile.displayName,
                        email: profile._json.emailAddress,
                        provider: 'linkedin',
                        linkedin: profile._json
                    });
                    user.save(function(err) {
                        if (err) console.log(err);
                        return done(err, user);
                    });
                } else {
                    return done(err, user);
                }
            });
        }
    ));
};
