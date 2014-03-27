'use strict';
var interested = require('../controllers/interestedlist');

module.exports = function(app) {
	app.get('/interested', interested.all);
	app.get('/api/interests', interested.index);
	app.post('/addfavorite', interested.add);
	app.delete('/api/interests/:id', interested.delete);
};