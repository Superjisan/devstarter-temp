'use strict';

module.exports = {
    db: 'mongodb://localhost/mean',
    app: {
        name: 'MEAN - A Modern Stack - Production'
    },
    // facebook: {
    //     clientID: 'APP_ID',
    //     clientSecret: 'APP_SECRET',
    //     callbackURL: 'http://localhost:3000/auth/facebook/callback'
    // },
    // twitter: {
    //     clientID: 'CONSUMER_KEY',
    //     clientSecret: 'CONSUMER_SECRET',
    //     callbackURL: 'http://localhost:3000/auth/twitter/callback'
    // },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    // google: {
    //     clientID: 'APP_ID',
    //     clientSecret: 'APP_SECRET',
    //     callbackURL: 'http://localhost:3000/auth/google/callback'
    // },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback',
        profileFields: ['id','first-name', 'last-name', 'email-address', 'headline', 'summary', 'specialties', 'picture-url', 'site-standard-profile-request', 'primary-twitter-account', 'interests', 'languages', 'skills', 'certifications', 'educations', 'courses', 'volunteer', 'three-current-positions', 'three-past-positions', 'num-recommenders', 'recommendations-received', 'date-of-birth', 'related-profile-views', 'honors-awards']
    }
};
