'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.visitedCreate = function(req, res) {
  User.findOne( { "_id": req.user._id }, function(err, user) {
    console.log("developer:", req.body);
    user.profiles_visited.push(req.body);
    user.save(function(err) {
      res.json({});
    });
  });
};

exports.visitedByCreate = function(req, res){

  User.findOne({ "_id": req.body.develId}, function(err, developers){
    if (err) {console.log(err)}
    console.log("user:", req.body);
    developers.visited_profiles.push(req.body)
    developers.save(function(err) {
      if (err) {console.log(err)}
      res.json({})
    })
  })
};

exports.record_clicks = function(req, res){
  console.log('hello')
      var redirect_url = req.query.url;
      var developer_id = req.params.developerId;
      var clickObj = {};
      var date = new Date();

      clickObj.url = req.params.service;
      clickObj.visited_by = {};
      var userInfo = clickObj.visited_by;
      userInfo.id = req.user._id;
      userInfo.name = req.user.name;
      userInfo.organization = req.user.work_experiences[0].company.name;
      userInfo.time_visited = date;

      console.log(clickObj)

      User.findOne({"_id": developer_id}, function(err, user){
          user.events.push(clickObj)
          user.save(function(err){
            if(err) console.log(err);
            console.log("I am going to:", redirect_url)
            res.redirect(redirect_url)
          })
      })


}
