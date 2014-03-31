'use strict';
var GitHubApi = require('github');
var mongoose = require('mongoose');
var User = mongoose.model('User');


var updateReposFromGithub = function(user) {
	var github = new GitHubApi({debug: true, version: '3.0.0'});
	console.log(user.githubAccessToken(), 'aSDfasdf');
	github.authenticate({
		type: 'oauth',
		token: user.githubAccessToken()
	});

	github.repos.getAll({}, function(err, data) {
		console.log('GITHUB', data);
	});
};

exports.render = function(req, res) {
  req.session.developer_register = false;
  res.render('index', {
    user: req.user ? JSON.stringify(req.user) : 'null'
  });
};

exports.developer_register = function(req, res) {
  req.session.developer_register = true;
  res.render('index', {
    user: req.user ? JSON.stringify(req.user) : 'null'
  });
};

exports.agreement = function(req, res) {
  // req.session.developer_register = true;
  if (req.query.agree==="yes") {
    User.findByIdAndUpdate(req.user._id, { signed_employer_agreement: true }, function(err) {
      if (!err) {
        res.redirect('/developers');
      } else {
        res.render('agreement', {
          user: req.user ? JSON.stringify(req.user) : 'null',
          err: err
        });
      }
    });
  } else {
    res.render('agreement', {
      user: req.user ? JSON.stringify(req.user) : 'null'
    });
  }
  
};

exports.test_route = function(req, res) {
	updateReposFromGithub(req.user);
	res.json({});
};
