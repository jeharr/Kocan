var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  itinerary: [{
    type: String,
  }],
  messages: [{
    type: String,
  }]
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  supplies: [{
    type: Schema.Types.ObjectId,
    ref: 'supply'
  }]

})

module.exports = mongoose.model('event', eventSchema);
