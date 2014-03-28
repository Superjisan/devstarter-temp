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
		res.redirect('/profile/' + req.user.id);
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
	User.find({'roles':{$in: ['developer'], $nin:['approved', 'denied']}}, function(err, developers){
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
		console.log('Success:', user.roles);
	})
}

exports.deny = function(req, res){
	var applicant = Object.keys(req.body)[0];
	User.findByIdAndUpdate(applicant,{$push: {'roles': 'denied'}}, function(err, user){
		if (err){
			return err;
		}
		console.log('Success:', user.roles);
	})
}


/**
 * Show user profile
 */
exports.profile = function(req, res) {
	// console.log(req.params.id);
	User.findOne({_id: req.params.id}, function(err, developers) {
		res.render('profile', {
			developers: developers,
			user: req.user
		});
	});
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
	console.log(oldUser);
	console.log(newUser);
	// User.findByIdAndUpdate(oldUser._id, { username: newUser.username, full_name: newUser.full_name, bio: newUser.bio }, function(err, user) {
	// 	if (err) {
	// 		res.json(err);
	// 	} else {
	// 		console.log(user);
	// 		res.json(user);
	// 	}
	// })
}





exports.workCreate = function(req, res) {
	User.findOne( { "_id": req.user._id }, function(err, user) {
		console.log(req.body);
		user.work_experiences.push(req.body);
		user.save(function(err) {
			res.json({});
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
			res.json({});
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
			res.json({});
		})
	})
}

exports.projectDelete = function(req, res) {
	User.findOne({ "projects._id": req.params.id }, function(err, user) {
		if (err) return next(err);
		user.projects.id(req.params.id).remove();
		user.save();
		res.json({});
	})
}
