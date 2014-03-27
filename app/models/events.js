'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var ClicksSchema = new Schema({
	url: String,
	time_clicked: {type: Date}
})

var EventsSchema = new Schema({
	visiting_user: {id: {type: Schema.Types.ObjectId, ref: 'Users'},
									name: {type: String, ref: 'Users'},
									organization: {type: String, ref: 'Users'}},
	user_visited: {id: {type: Schema.Types.ObjectId, ref: 'Users'},
								name: {type: String, ref: 'Users'},
								organization: {type: String, ref: 'Users'}},
	start_time: {type: Date},
	end_time: {type: Date},
	clicks: [ClicksSchema]
});

exports.ClicksSchema = ClicksSchema;
exports.EventsSchema = EventsSchema;

