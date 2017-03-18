//MongoDB schema declation
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var locationSchema = new  mongoose.Schema({
  ownerID: {
      type: String,
      required: true
  },
  address:{
      type: String,
      required: true,
  },
  rating:{
      type: Number,
      required: true
  },
  price:{
      type:Number,
      required: true
  },
  capacity:{
      type: Number,
      default: 1
  },
  availability:{
      type:[{start: Number, end: Number}]
  },
  bookings:{
      type:{},
      default: {}
  }
});

module.exports = mongoose.model('locationSchema',locationSchema);