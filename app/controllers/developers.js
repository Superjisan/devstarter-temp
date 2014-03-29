'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	User = mongoose.model('User');

exports.all = function(req, res) {
		var fields = { 
			'name' : 1, 
			'headline': 1, 
			'linkedin.pictureUrl': 1,
			'_id': 1,
			'linkedin.headline': 1,
			'linkedin.summary': 1,
			'location': 1,
			'github_url': 1, 
			'linkedin_url': 1,
			'summary': 1,
			'relocate': 1
		};

	User.find({ roles: 'developer'}, fields).exec(function(err, developers){
		if(err) {
			res.render('error', {
				status: 500
			});
		} else {

			res.render('browse', {developers: developers, user: req.user ? JSON.stringify(req.user) : 'null'});
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

