'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  config = require('../../config/config');

exports.all = function(req, res) {
    var fields = {
      'name' : 1,
      'headline': 1,
      'linkedin.pictureUrl': 1,
      '_id': 1,
      'linkedin.headline': 1,
      'linkedin.summary': 1,
      'location': 1,
      'github_url': 1,
      'linkedin_url': 1,
      'twitter_url': 1,
      'summary': 1,
      'relocate': 1,
      'profile_picture': 1,
      'funny_profile_picture': 1,
    };

  User.find({ roles: 'approved'}, fields).exec(function(err, developers){
    if(err) {
      res.render('error', {
        status: 500
      });
    } else {
      if (config.showAgreement && req.user && req.user.roles.length && req.user.roles.indexOf('employer') > -1 && !req.user.signed_employer_agreement) {
        res.redirect('/agreement');
      } else {
        res.render('browse', {title: "Devs for Hire @ Fullstack Academy", developers: developers, user: req.user ? JSON.stringify(req.user) : 'null'});
      }
    }
  });

};

exports.developer = function(req, res, next, id){
  User.load(id, function(err, developer){
    if(err) return next(err);
    if (!developer) return next(new Error('Failed to load developer' + id));
    req.developer = developer;
    next();
  });
};

exports.show = function(req,res) {
  res.jsonp(req.user);
};

