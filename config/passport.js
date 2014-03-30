'use strict';

var mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GitHubStrategy = require('passport-github').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    LinkedinStrategy = require('passport-linkedin').Strategy,
    User = mongoose.model('User'),
    _ = require("lodash"),
    config = require('./config');


var parseLinkedIn = function(profile) {
	return {
    name: profile.displayName,
    headline: profile._json.headline,
    email: profile._json.emailAddress,
    work_experiences: profile._json.positions.values,
    educations: profile._json.educations.values,
    auth_methods: [{provider: 'linkedin', providerId: profile._json.id}],
    skills: profile._json.skills.values.map(function(skill) { return skill.skill.name; }).join(", "),
    linkedin: profile._json,
    linkedin_url: profile._json.siteStandardProfileRequest.url,
    relocate: true,

  };
};
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
            User.findOne({ 'github.id' : profile.id },
                function(err, github) {
                    if (!github) {
                        // console.log(req.user)
                     User.findOne({ 'linkedin.id' : req.user.linkedin.id},
                        function(err, user){
                          if(err) console.log(err);
                            user.github = profile._json;
                            user.github_url = profile._json.html_url;
                         ;
                            user.location = profile._json.location;
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
                'linkedin.id' : profile.id
            }, function(err, user) {
                if (!user) {
                	var linkedInFields = parseLinkedIn(profile);
                    user = new User(linkedInFields);
                    user.roles.push('developer')
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
