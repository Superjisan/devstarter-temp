'use strict';

var authorization = require('./middlewares/authorization');

module.exports = function(app) {

    // Home route
    var index = require('../controllers/index');
    var seed = require('../controllers/seed')
    app.get('/', index.render);
    app.get('/test', authorization.requiresLogin, index.test_route);
    if(process.env.NODE_ENV === "development") {
      app.get('/seed', seed.seed)
    }

};
