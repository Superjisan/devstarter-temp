var nodemailer = require('nodemailer'),
		config = require('../../config/config');

exports.smtpTransport = nodemailer.createTransport("SMTP",{
	service: "Gmail",
	auth: {
		user: config.google.email,
		pass: config.google.password
	}
});