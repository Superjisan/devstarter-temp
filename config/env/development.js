'use strict';

module.exports = {
    db: 'mongodb://localhost/devstarter',
    app: {
        name: 'Dev Starter - Dynamic resume site for Junior Developers'
    },
    facebook: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: '8384af5c1911750906c5',
        clientSecret: '9dc50a5a5b8ccff5ce76ec6ef47d613a5c2b3709',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: '77qy5d9cyaxg74',
        clientSecret: 'DIfXoYralsxVMTZN',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
