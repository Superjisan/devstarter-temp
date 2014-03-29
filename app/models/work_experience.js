'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

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
	pitch: String,
	description: String,
	tags: [String],
	tech_tags: String,
	images: [{url: String}],
	video: String,
	url: String,
	role: String
});

exports.WorkExperienceSchema = WorkExperienceSchema;
exports.EducationSchema = EducationSchema;
exports.ProjectSchema = ProjectSchema;
// mongoose.model('WorkExperience', WorkExperienceSchema);