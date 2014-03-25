'use strict';
var GitHubApi = require("github");

var updateReposFromGithub = function(user) {
	var github = new GitHubApi({debug: true, version: '3.0.0'});
	console.log(user.githubAccessToken(), "aSDfasdf");
	github.authenticate({
		type: 'oauth',
		token: user.githubAccessToken()
	});

	github.repos.getAll({}, function(err, data) {
		console.log("GITHUB", data);
	});
};

exports.render = function(req, res) {
    res.render('index', {
        user: req.user ? JSON.stringify(req.user) : 'null'
    });
};

exports.test_route = function(req, res) {
  updateReposFromGithub(req.user);
  res.json({});
};
