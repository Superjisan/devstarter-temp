'use strict';

// User routes use users controller
var users = require('../controllers/users');
var authorization = require('./middlewares/authorization');


module.exports = function(app, passport) {
	app.get('/signin', users.signin);
	app.get('/signup', users.signup);
	app.get('/signout', users.signout);
	app.get('/users/me', users.me);
	app.get('/users/admin', authorization.isAdmin, users.admin);

	// Setting up the users api
	app.post('/users', users.create);

	// Setting up the userId param
	app.param('userId', users.user);

	// Setting the local strategy route
	app.post('/users/session', passport.authenticate('local', {
		failureRedirect: '/signin',
		failureFlash: true
	}), users.session);



// Setting the github oauth routes
	app.get('/auth/github', passport.authorize('github', {
		scope: ['user', 'repo','read:org'],
		failureRedirect: '/'
	}), users.connect);

	app.get('/auth/github/callback', passport.authorize('github', {
		failureRedirect: '/'
	}), users.authCallback);



		// Setting the linkedin oauth routes
	app.get('/auth/linkedin', passport.authenticate('linkedin', {
			failureRedirect: '/signin',
			scope: ['r_emailaddress', 'w_messages', 'r_contactinfo', 'r_fullprofile']
		}), users.signin);

	app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
			failureRedirect: '/signin'
		}), users.authCallback);
	app.get('/profile/edit', users.profileedit);
	app.get('/profile/:name', users.profile);


};
