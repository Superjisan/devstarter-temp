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
        callbackURL: 'http://localhost:3000/auth/linkedin/callback',
        profileFields: ['id','first-name', 'last-name', 'email-address', 'headline', 'distance', 'summary', 'specialties', 'picture-url', 'site-standard-profile-request', 'phone-numbers', 'primary-twitter-account', 'interests', 'languages', 'skills', 'certifications', 'educations', 'courses', 'volunteer', 'three-current-positions', 'three-past-positions', 'num-recommenders', 'recommendations-received', 'date-of-birth', 'related-profile-views', 'honors-awards']
        // OAuth_user_token = bdd02e57-3d83-4e6a-80aa-2b5fab07445f,
        // OAuth_user_secret = 1f4ce2ea-64c9-4494-b638-d12d104c1b92
        // don't know what to do with these but they came with LI credentials
    }
};
