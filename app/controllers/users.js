'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User'),
		mailer = require('../lib/mailer'),
    _ = require("lodash"),
    config = require('../../config/config');

/**
 * Auth callback
 */

exports.authCallback = function(req, res) {
	// if (req.user.github){
	// 	res.redirect('/profile/' + req.user.id);
	// } else {
  // console.log(req);
  // console.log(res);

  if (config.showAgreement && !req.user.signed_employer_agreement && req.user.roles.indexOf('employer')>-1) {
  	res.redirect('/agreement');
  } else {
  	res.redirect('/developers');
  }

	// }
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
	User.find({'roles':{$nin:['approved', 'denied']}}, function(err, developers){
		res.render('users/admin', {
			title: 'Admin Page',
			users: developers
		});
	});
};

exports.approve = function(req, res){
	var applicant = Object.keys(req.body)[0];
	User.findByIdAndUpdate(applicant,{$push: {'roles': 'approved'}}, function(err, user){
		if (err){
			return err;
		}
		// mailer.smtpTransport.sendMail({
		// 	from: "Hire Fullstack <hirefullstackacademy@gmail.com>",
		// 	to: user.name+' <'+user.email+'>',
		// 	subject: "Your profile has been approved!",
		// 	text: "View your profile at http://hire.fullstackacademy.com"
		// }, function(error, response){
		// 	if (error){
		// 		console.log(error)
		// 	} else {
		// 		console.log('Success:', user.roles);
		// 	}
		// 	mailer.smtpTransport.close();
		// })
	})
}

exports.deny = function(req, res){
	var applicant = Object.keys(req.body)[0];
	User.findByIdAndUpdate(applicant,{$push: {'roles': 'denied'}}, function(err, user){
		if (err){
			return err;
		}
		mailer.smtpTransport.sendMail({
			from: "Hire Fullstack <hirefullstackacademy@gmail.com>",
			to: user.name+' <'+user.email+'>',
			subject: "Your profile has been denied.",
			text: "Sorry, we cannot accept your profile at this time."
		}, function(error, response){
			if (error){
				console.log(error)
			} else {
				console.log('Success:', user.roles);
			}
			mailer.smtpTransport.close();
		})
	})
}


/**
 * Show user profile
 */
exports.profile = function(req, res) {
	// console.log(req.params.id);
	User.findOne({_id: req.params.id}, function(err, developer) {
		// console.log(developer)
		// console.log("this is req.developer: ", req.developer)
		req.developer = developer;
		res.render('profile', {
			developer: req.developer,
			user: req.user
		});
	});
};

exports.redirectToProfile = function(req, res) {
	res.redirect('/profile/' + req.user._id);
};
exports.profileedit = function(req, res) {
	res.render('profile-edit');
};

exports.apiProfile = function(req, res) {
	res.json(req.user);
};

exports.apiProfileEdit = function(req, res) {
	var oldUser = req.user;
	var newUser = req.body;

	// values from the newUser object that we want to update
	var clean_values = [
		"name",
		"email",
		"linkedin.headline",
		"linkedin.skills.values",
		"location",
		"relocate",
		"summary",
		"video_url",
		"twitter_url",
		"github_url",
		"skills",
		"events",
		"profiles_visited",
		"visited_profiles"
		];

	var newUser = _.pick(newUser, clean_values);

	User.findByIdAndUpdate(oldUser._id, newUser, function(err, user) {
		if (err) {
			res.json(err);
		} else {
			console.log(user);

			res.json(user);
		}


	})
};

exports.apiDeveloperProfile = function(req, res) {
	console.log("req.developers: ",req.developers);
	res.json(req.developers)
};




exports.workCreate = function(req, res) {
	User.findOne( { "_id": req.user._id }, function(err, user) {
		console.log(req.body);
		user.work_experiences.push(req.body);
		user.save(function(err) {
			res.json(_.last(user.work_experiences));
		});
	});
};

exports.workDelete = function(req, res) {
	User.findOne({ "work_experiences._id": req.params.id }, function(err, user) {
		if (err) return next(err);
		user.work_experiences.id(req.params.id).remove();
		user.save();
		res.json({});
	});
};

exports.educationCreate = function(req, res) {
	User.findOne( {"_id": req.user._id }, function(err, user) {
		console.log(req.body);
		user.educations.push(req.body);
		user.save(function(err) {
			res.json(_.last(user.educations));
		});
	});
};

exports.educationDelete = function(req, res) {
	User.findOne({ "educations._id": req.params.id }, function(err, user) {
		if (err) return next(err);
		user.educations.id(req.params.id).remove();
		user.save();
		res.json({});
	})
}

exports.projectCreate = function(req, res) {
	User.findOne( {"_id": req.user._id }, function(err, user) {
		user.projects.push(req.body);
		user.save(function(err) {
			res.json(_.last(user.projects));
		})
	})
}

exports.projectUpdate = function(req, res) {
	User.findOne( {"_id": req.user._id }, function(err, user) {

		user.projects.id(req.params.id).remove();
		user.projects.push(req.body);
		user.save(function(err) {
			res.json(_.last(user.projects));
		})
	})
};

exports.projectDelete = function(req, res) {
	User.findOne({ "projects._id": req.params.id }, function(err, user) {
		if (err) return next(err);
		user.projects.id(req.params.id).remove();
		user.save();
		res.json({});
	})
};


exports.addAttachment = function(req, res) {
  var updates = {$set:{}};

  User.findOne( {"_id": req.user._id }, function(err, user) {
    if (req.body.attachments) {
      req.body.attachments.forEach(function(attachment){
        updates.$set[attachment.name] = attachment.url;
      });
    } else if (req.body.attachment) {
      updates.$set[req.body.attachment] = req.body.url;
    } else {
      return res.send(400);
    }

    console.log(updates);

    User.update({"_id": req.user._id}, updates, function(){
      res.json(req.body);
    });
  })
};
