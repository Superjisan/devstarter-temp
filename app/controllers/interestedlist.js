'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	mailer = require('../lib/mailer');

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
	// access the name of the user being viewed
	var viewedUser = Object.keys(req.body)[0];
// query the database to find the logged in user's interest array
	User.findOne({_id: req.user.id}, function (err, myUser) {
		console.log(myUser.name, "this");
		// query the db to find the viewed user's id
		console.log(viewedUser, "here");
		User.findOne({name: viewedUser}, function(err,viewUser){
			if (err){
				return err;
			}
			console.log(viewUser.name, "that");
			// push the viewed id into the logUser's array then save the user object
			myUser.interested.push(viewUser.id);
			console.log(myUser.interested);
			myUser.save();
			console.log('success');
			mailer.smtpTransport.sendMail({
				from: "Hire Fullstack <hirefullstackacademy@gmail.com>",
				to: viewUser.name+' <'+viewUser.email+'>',
				subject: "An interested user has clicked your profile",
				text: myUser.name+' is possibly interested in hiring you.'
			}, function(error, response){
				if (error){
					console.log(error)
				} else {
					console.log('interested sent');
				}
				mailer.smtpTransport.close();
			})
		});
	});
};