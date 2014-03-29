'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.visitedCreate = function(req, res) {
  User.findOne( { "_id": req.user._id }, function(err, user) {
    console.log(req.body);
    user.events.push(req.body);
    user.save(function(err) {
      res.json({});
    });
  });
};

exports.visitedByCreate = function(req, res){
  User.findOne({ "_id": req.developers._id}, function(err, developers){
    console.log(req.body);
    developers.events.push(req.body)
    developers.save(function(err) {
      res.json({})
    })
  })
};
