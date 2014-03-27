'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProfilesVisitedBySchema = new Schema({

});


var EventsSchema = new Schema({
  user_id :  { type: Schema.Types.ObjectId,
              ref: 'Users',
              required: true},
  profiles_visited : [],
  profile_visited_by: [ProfilesVisitedBySchema],
  user_name: {type: String,
              ref: 'Users'},
  user_organization : {
    type: String,
    ref: 'Users'}
});
