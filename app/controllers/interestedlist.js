'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	nodemailer = require('nodemailer'),
	config = require('../../config/config');

var smtpTransport = nodemailer.createTransport("SMTP",{
  service: "Gmail",
  auth: {
    user: config.google.email,
    pass: config.google.password
  }
});
// define the findOne function that searches the database based on id's
// creates a multidimensional array with the users' information to be used on page
var findFollowers = function (namesArray, interestedArray, i) {
	var id = interestedArray[i];
	User.findOne({_id: id}, function(err, user) {
		var userInfoArr = { name: user.name, email: user.email, id: user.id};
		// console.log(userInfoArr);
		namesArray.push(userInfoArr);
	});
};

// loops over all id's in the interested attribute in db and collects relevant data
exports.all = function (req, res) {
	res.render('interested');
};

exports.index = function(req, res) {
	var interestedArray = req.user.interested;

	User.find({_id: {$in:interestedArray}}, function(err, users){
		res.json(users);
	});
};
exports.delete = function(req, res) {
	// console.log(req.params.id);
	User.findOne({_id: req.user.id }, function(err, user) {
		var interestedArray = user.interested;
		console.log(interestedArray);
		for (var i = interestedArray.length-1; i>=0; i--) {
			if (interestedArray[i].toString() === req.params.id) {
				console.log('th');
				interestedArray.splice(i,1);
			}
			else {
				console.log('they don');
			}
		}
		console.log(interestedArray);
		user.save(function(err){
			console.log(err);
		});
		res.json({});
	});
};

exports.add = function(req, res) {
// query the database to find the logged in user's interest array
	User.findOne({_id: req.user.id}, function (err, myUser) {
		// query the db to find the viewed user's id
		User.findOne({name: req.body.name}, function(err,viewUser){
			// push the viewed id into the logUser's array then save the user object
			myUser.interested.push(viewUser.id);
			myUser.save();
		});
	});
};