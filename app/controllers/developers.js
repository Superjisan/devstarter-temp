'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	User = mongoose.model('User');

exports.all = function(req, res) {
	User.find({ roles: 'developer'}).exec(function(err, developers){
		console.log(developers);
		if(err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.render('browse', {developers: developers});
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

