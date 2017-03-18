//MongoDB schema declation
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var eventSchema = new  mongoose.Schema({
  location: {
      type: {
          id: String,
          name: String,
          address: String,
          rating: Number
      },
      required: true
  },
  activity:{
      type: String,
      required: true,
      index: true
  },
  time:{
      type: Date,
      required: true
  },
  groupSize:{
      type: Number,
      required: true
  },
  users:{ //users interested
      type:[],
      default:[]
  },
  active:{ //whether or not it has people
      type: Boolean
  },
  matched:{ //whether or not its full
      type: Boolean,
  },
  confirmed:{ //whether or not everyone confirmed
      type: Boolean,
  }
});

module.exports = mongoose.model('eventSchema',eventSchema);