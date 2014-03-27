'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User');
// define an empty array or object to use on the page
var namesArray = [];

// define the findOne function that searches the database based on id's
// creates a multidimensional array with the users' information to be used on page
var findOne = function (namesArray, interestedArray, i) {
	var id = interestedArray[i];
	User.findOne({_id: id}, function(err, user) {
		var userInfoArr = { name: user.name, email: user.email, id: user.id};
		// console.log(userInfoArr);
		namesArray.push(userInfoArr);
	});
};

// loops over all id's in the interested attribute in db and collects relevant data
exports.all = function (req, res) {
	var interestedArray = req.user.interested;
	// console.log(interestedArray);
	for (var i = 0; i<interestedArray.length; i++) {
		findOne(namesArray, interestedArray, i);
	}
	console.log(namesArray);
	res.render('interested', {names: namesArray, user: req.user });
};