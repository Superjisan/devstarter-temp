'use strict';

var developers = require('../controllers/developers');
// var authorization = require('./middlewares/authorization');

// Article authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.article.user.id !== req.user.id) {
		return res.send(401, 'User is not authorized');
	}
	next();
};

module.exports = function(app) {

	app.get('/developers', developers.all);
	app.get('/developers/:developerId', developers.show);

	// Finish with setting up the articleId param
	app.param('developerId', developers.developer);
};
