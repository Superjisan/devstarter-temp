'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var WorkExperienceSchema = new Schema({
	title: String,
	startDate: { year: Number, month: Number },
	endDate: { year: Number, month: Number },
	isCurrent: Boolean,
	id: Number,
	company: {}
});

var EducationSchema = new Schema({
	startDate: { year: Number, month: Number },
	endDate: { year: Number, month: Number },
	schoolName: String,
	notes: String,
	id: Number,
	fieldOfStudy: String,
	degree: String,
	activities: String
});

var ProjectSchema = new Schema({
	name: String,
	githubUrl: String,
	images: [{url: String, description: String}],
	video: String
});

exports.WorkExperienceSchema = WorkExperienceSchema;
exports.EducationSchema = EducationSchema;
exports.ProjectSchema = ProjectSchema;
// mongoose.model('WorkExperience', WorkExperienceSchema);