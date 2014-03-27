'use strict';
var interested = require('../controllers/interestedlist');

module.exports = function(app) {
	app.get('/interested', interested.all);
};