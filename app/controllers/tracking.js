'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.visitedCreate = function(req, res) {
  User.findOne( { "_id": req.body.users_visited.id }, function(err, user) {
    console.log("user:", req.body);
    user.profiles_visited.push(req.body);
    user.save(function(err) {
      res.json({});
    });
  });
};

exports.visitedByCreate = function(req, res){

  User.findOne({ "_id": req.user._id}, function(err, developers){
    if (err) {console.log(err)}
    console.log("developer:", req.body);
    developers.visited_profiles.push(req.body)
    developers.save(function(err) {
      if (err) {console.log(err)}
      res.json({})
    })
  })
};
