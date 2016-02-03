var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var supplySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  eventId: {
    type: Schema.Types.ObjectId,
    ref: 'event'
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
});

module.exports = mongoose.model('supply', supplySchema);

