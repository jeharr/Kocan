var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  text: {
    type: String,
    required: true
  },
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'event'
  }]
});

module.exports = mongoose.model('user', userSchema);
