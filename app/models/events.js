'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ClicksSchema = new Schema({
	url: String,
	time_clicked: {type: Date}
})

var EventsSchema = new Schema({
	visited_by: {id: {type: Schema.Types.ObjectId, ref: 'Users'},
									name: {type: String, ref: 'Users'},
									organization: {type: String, ref: 'Users'},
									time_visited: Date
								},
	user_visited: {id: {type: Schema.Types.ObjectId, ref: 'Users'},
								name: {type: String, ref: 'Users'},
								organization: {type: String, ref: 'Users'},
								time_visited: Date
								},
	start_time: {type: Date},
	end_time: {type: Date},
	clicks: {url: String,
					 time_clicked: {type: Date}
	}
});

var ProfileVisitsSchema = new Schema({
  id: {type: Schema.Types.ObjectId, ref: 'Users'},
									name: {type: String},
									organization: {type: String, ref: 'Users'},
									time_visited: Date

});

var VisitedProfilesSchema = new Schema({
	id: { type: Schema.Types.ObjectId, ref: 'Users'},
	name: String,
	organization: String,
	time_visited: Date
})

exports.ClicksSchema = ClicksSchema;
exports.EventsSchema = EventsSchema;
exports.VisitedProfilesSchema = VisitedProfilesSchema;
exports.ProfileVisitsSchema = ProfileVisitsSchema;


