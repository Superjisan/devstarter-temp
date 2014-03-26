'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Auth callback
 */

exports.authCallback = function(req, res) {
	if (req.user.github){
		res.redirect('/profile');
	} else {
		res.redirect('/');
	}
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
	res.render('users/signin', {
		title: 'Signin',
		message: req.flash('error')
	});
};

exports.connect = function(req, res){
	res.render('profile');
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
	res.render('users/signup', {
		title: 'Sign up',
		user: new User()
	});
};

/**
 * Logout
 */
exports.signout = function(req, res) {
	req.logout();
	res.redirect('/');
};

/**
 * Session
 */
exports.session = function(req, res) {
	res.redirect('/');
};

/**
 * Create user
 */
exports.create = function(req, res, next) {
	var user = new User(req.body);
	var message = null;

	user.provider = 'local';
	user.save(function(err) {
		if (err) {
			switch (err.code) {
			case 11000:
			case 11001:
				message = 'Username already exists';
				break;
			default:
				message = 'Please fill all the required fields';
			}
			return res.render('users/signup', {
				message: message,
				user: user
			});
		}
		req.logIn(user, function(err) {
			if (err) return next(err);
			return res.redirect('/');
		});
	});
};

/**
 * Send User
 */
exports.me = function(req, res) {
	res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
	User
	.findOne({
		_id: id
	})
	.exec(function(err, user) {
		if (err) return next(err);
		if (!user) return next(new Error('Failed to load User ' + id));
		req.profile = user;
		next();
	});
};

//shows pending profile requests
exports.admin = function(req, res) {
	User.find({roles: 'developer'}, function(err, developers){
		res.render('users/admin', {
			title: 'Admin Page',
			user: req.params.user,
			users: developers
		});
	});
};


/**
 * Show user profile
 */
exports.profile = function(req, res) {
	console.log(req.params.name);
	User.findOne({ _id: req.params.name}, function(err, user) {
		res.render('profile', {
			user: user
		});
	});
};
exports.profileedit = function(req, res) {
	res.render('profile-edit');
};
