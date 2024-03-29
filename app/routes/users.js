'use strict';

// User routes use users controller
var tracker = require('../controllers/tracking.js');
var users = require('../controllers/users');
var authorization = require('./middlewares/authorization');



module.exports = function(app, passport) {
	app.get('/signin', users.signin);
	app.get('/signup', users.signup);
	app.get('/signout', users.signout);
	// app.get('/users/me', users.me);
	app.get('/users/admin', authorization.isAdmin, users.admin);
	app.post('/users/admin/approve', authorization.isAdmin, users.approve);
	app.post('/users/admin/deny', authorization.isAdmin, users.deny);

	app.get('/users/tracking', authorization.requiresLogin, function(req,res){
		res.render('users/tracking', {
			title: 'Tracking Page',
			user: req.user
		});
	});
	// global tracking routes
	app.get('/users/admin/globalVisited', authorization.isAdmin, tracker.trackingGlobalVisits);

	// class sort routes

	app.get('/users/admin/classSort', authorization.isAdmin, tracker.classSort);
	app.get('/class', authorization.isAdmin, tracker.classGet);
	app.post('/saveClassData/:id', authorization.isAdmin, tracker.saveClassData);



	app.get('/cleaning', tracker.cleaningUpData);

//tracking_clicks
	app.get('/r/:developerId/:service', tracker.record_clicks);


	// Setting up the users api
	// app.post('/users', users.create);

	// Setting up the userId param
	// app.param('userId', users.user);

	app.get('/profile/edit', authorization.requiresLogin, users.profileedit);
	app.get('/profile/me', authorization.requiresLogin, users.redirectToProfile);
	app.get('/profile/:id', authorization.requiresLogin, users.profile);



	//=====================================================================
	// API CALLS
	app.get('/api/profile', authorization.requiresLogin, users.apiProfile);
	app.get('/api/devProfile', authorization.requiresLogin, users.apiDeveloperProfile)
	app.post('/api/profile/edit', authorization.requiresLogin, users.apiProfileEdit);

	app.post("/api/work", authorization.requiresLogin, users.workCreate);
	app.delete("/api/work/:id", authorization.requiresLogin, users.workDelete);

	app.post("/api/education", authorization.requiresLogin, users.educationCreate);
	app.delete("/api/education/:id", authorization.requiresLogin, users.educationDelete);

	app.post("/api/project", authorization.requiresLogin, users.projectCreate);
	app.post("/api/project/:id", authorization.requiresLogin, users.projectUpdate);
	app.delete("/api/project/:id", authorization.requiresLogin, users.projectDelete);

	app.put("/api/attachments", authorization.requiresLogin, users.addAttachment);

	// end api calls
	//=====================================================================







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
			scope: ['r_fullprofile', 'r_emailaddress', 'r_contactinfo']
		}), users.signin);

	app.get('/auth/linkedin/callback', passport.authenticate('linkedin', {
			failureRedirect: '/signin'
		}), users.authCallback);

	//Events post events
	app.post('/api/events', authorization.requiresLogin, tracker.visitedCreate);
	app.post('/api/events/developer', authorization.requiresLogin, tracker.visitedByCreate);

};

