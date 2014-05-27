'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.visitedCreate = function(req, res) {
	User.findOne( { '_id': req.user._id }, function(err, user) {
		user.profiles_visited.push(req.body);
		user.save(function(err) {
			res.json({});
		});
	});
};

exports.visitedByCreate = function(req, res){

	User.findOne({ '_id': req.body.develId}, function(err, user){
		if (err) {
			console.log(err);
		}
		if (req.body.users.id !== req.body.develId) {
			user.visited_profiles.push(req.body);
			user.save(function(err) {
				if (err) {
					console.log(err);
				}
				res.json({});
			});
		}
	});
};


exports.trackingGlobalVisits = function(req,res) {
	var usersCheckingOutProfiles =  [];
	var inactiveUsers = [];
	User.find(function (err, users) {
		for (var i in users) {
			if (users[i].visited_profiles.length > 0) {
				usersCheckingOutProfiles.push(users[i]);
			}
			else {
				inactiveUsers.push(users[i]);
			}
		}

		res.render('globalTracking', {user: usersCheckingOutProfiles, inactiveUsers: inactiveUsers});
	});
};

// swig way
exports.classSort = function(req, res) {
	User.find({ roles: 'approved'}, function(err, devs) {
		// console.log(devs);
		res.render('admin/classSort', {title: 'Class Sorting Page'});
	});
};

// Angular way (actually being used right now)
exports.classGet = function (req, res) {
	User.find(function(err, devs) {
		if (err) {
			console.log(err);
		}
		else {
			res.jsonp(devs);
		}
	});
};

exports.saveClassData = function (req, res) {
	User.findOne({ '_id': req.params.id},
		function(err,dev) {
			if (err) {
				console.log(err);
			}
			else {
				dev.cohort = req.body.cohortSelect;
				dev.hired = req.body.hired || false;
				dev.save();
			}
		}
	);
	console.log(req.body);
	console.log(req.params.id);
};

// the next two functinos are single use to clean up the self viewed profile visits in the tracking

function searchUsers(user, arr){
	User.findOne( { '_id': user._id }, function(err, selectedUser) {
		selectedUser.visited_profiles = arr;
		selectedUser.save(function(err) {
			if (err) {
				console.log(err);
			}
			console.log(selectedUser.name + ' has ' + arr.length.toString() + 'visitors');
		});
	});
}

exports.cleaningUpData = function (req, res) {
	User.find(function(err, users) {
		for (var i in users) {
			var visitedArr = [];
			for (var x = 0; x < users[i].visited_profiles.length; x++) {
				if (users[i].visited_profiles[x].users.id.toString() !== users[i]._id.toString()){
					visitedArr.push(users[i].visited_profiles[x].users);
					// console.log(users[i]);
					// console.log(users[i].name);
					// console.log(users[i].visited_profiles[x].users.name);

				}
			}
			searchUsers(users[i], visitedArr);
		}
	});
};

// ^ end clean up tasks

exports.record_clicks = function(req, res){
	console.log('hello');
      // var redirect_url = req.query.url;
      // var developer_id = req.params.developerId;
      // var date = new Date();

      // var clickObj = {};
      // clickObj.clicks = {
      //   url : req.params.service,
      //   time_clicked : date
      // };
      // clickObj.url = req.params.service;
      // clickObj.visited_by = {};
      // var userInfo = clickObj.visited_by;
      // userInfo.id = req.user._id;
      // userInfo.name = req.user.name;
      // userInfo.organization = req.user.work_experiences[0].company.name;
      // userInfo.time_visited = date;
      // console.log(clickObj)

      // User.findOne({"_id": developer_id}, function(err, user){
      //     user.events.push(clickObj)
      //     user.save(function(err){
      //       if(err) console.log(err);
      //       console.log("I am going to:", redirect_url)
      //       res.redirect(redirect_url)
      //     })
      // })
};
