//MongoDB schema declation
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var locationSchema = new  mongoose.Schema({
  id: {
      type: String,
      required: true,
      index: true
  },
  name: {
      type: String,
      required: true
  },
  activity:{
      type: String,
      required: true
  },
  address:{
      type: String,
      required: true,
  },
  rating:{
      type: number,
      required: true
  },
  eventExists:{ //so we know if it should be made
      type: Boolean,
      default: false,
      index: true
  },
  totalConfirmed: { // total times people actually went to this place
      type: Number,
      default: 0
  }
});

module.exports = mongoose.model('locationSchema',locationSchema);