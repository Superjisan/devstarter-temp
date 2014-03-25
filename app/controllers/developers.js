'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    _ = require('lodash');

exports.all = function(req, res) {
  User.find().exec(function(err, users){
    if(err) {
      res.render('error', {
        status: 500
      });
    } else {
      res.jsonp(users)
    }
  })
};

exports.developer = function(req, res, next, id){
  User.load(id, function(err, developer){
    if(err) return next(err);
    if (!developer) return next(new Error('Failed to load developer' + id));
    req.developer = developer;
    next();
  })
}

exports.show = function(req,res) {
  res.jsonp(req.user)
}

