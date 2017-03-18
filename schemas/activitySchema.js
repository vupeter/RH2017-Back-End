//MongoDB schema declation
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var activitySchema = new  mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  description:{
    type: String,
    required: true
  },
  eventCount:{
      type: Number,
      required: true
  },
  locations:{
      type: [],
      default: []   
  }
});

module.exports = mongoose.model('activitySchema',activitySchema);