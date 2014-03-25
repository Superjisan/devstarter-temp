'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    WorkExperienceSchema = require('./work_experience').WorkExperienceSchema,
		EducationSchema = require('./work_experience').EducationSchema;
/**
 * User Schema
 */
var UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    provider: String,
    admin: Boolean,
    developer: Boolean,
    github: {},
    linkedin: {},
    educations: [EducationSchema],
    work_experiences: [WorkExperienceSchema],
    auth_methods: [{provider: String, providerId: String, accessToken: String, refreshToken: String}]
});


UserSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).exec(cb);
};



/**
 * Virtuals
 */
// UserSchema.virtual('password').set(function(password) {
//     this._password = password;
//     this.salt = this.makeSalt();
//     this.hashed_password = this.encryptPassword(password);
// }).get(function() {
//     return this._password;
// });

/**
 * Validations
 */
var validatePresenceOf = function(value) {
    return value && value.length;
};

// The 4 validations below only apply if you are signing up traditionally.
UserSchema.path('name').validate(function(name) {
    // If you are authenticating by any of the oauth strategies, don't validate.
    if (!this.provider) return true;
    return (typeof name === 'string' && name.length > 0);
}, 'Name cannot be blank');

UserSchema.path('email').validate(function(email) {
    // If you are authenticating by any of the oauth strategies, don't validate.
    if (!this.provider) return true;
    return (typeof email === 'string' && email.length > 0);
}, 'Email cannot be blank');

// UserSchema.path('username').validate(function(username) {
//     // If you are authenticating by any of the oauth strategies, don't validate.
//     if (!this.provider) return true;
//     return (typeof username === 'string' && username.length > 0);
// }, 'Username cannot be blank');

// UserSchema.path('hashed_password').validate(function(hashed_password) {
//     // If you are authenticating by any of the oauth strategies, don't validate.
//     if (!this.provider) return true;
//     return (typeof hashed_password === 'string' && hashed_password.length > 0);
// }, 'Password cannot be blank');


/**
 * Pre-save hook
 */
// UserSchema.pre('save', function(next) {
//     if (!this.isNew) return next();

//     if (!validatePresenceOf(this.password) && !this.provider)
//         next(new Error('Invalid password'));
//     else
//         next();
// });

/**
 * Methods
 */

UserSchema.methods = {
	getAuthMethod: function(method) {
		for(var i=0; i < this.auth_methods.length; i++) {
			if (this.auth_methods[i].provider === method) {
				return this.auth_methods[i];
			}
		}
	},
	githubAccessToken: function() {
		var githubAuth = this.getAuthMethod("github");
		if(githubAuth) {
			return githubAuth.accessToken;
		}
	}
};
// UserSchema.methods = {
//     /**
//      * Authenticate - check if the passwords are the same
//      *
//      * @param {String} plainText
//      * @return {Boolean}
//      * @api public
//      */
//     authenticate: function(plainText) {
//         return this.encryptPassword(plainText) === this.hashed_password;
//     },

//     /**
//      * Make salt
//      *
//      * @return {String}
//      * @api public
//      */
//     makeSalt: function() {
//         return crypto.randomBytes(16).toString('base64');
//     },

//     /**
//      * Encrypt password
//      *
//      * @param {String} password
//      * @return {String}
//      * @api public
//      */
//     encryptPassword: function(password) {
//         if (!password || !this.salt) return '';
//         var salt = new Buffer(this.salt, 'base64');
//         return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
//     }
// };

mongoose.model('User', UserSchema);
