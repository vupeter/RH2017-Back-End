//MongoDB schema declation
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var userSchema = new  mongoose.Schema({
  owner:{
    type: Boolean,
    required: true
  },
  name: {
      type: String,
      required: true
  },
  avatarURL:{
      type: String,
      required: true
  },
  description:{
    type: String,
    required: true
  },
  ratings:{
      type: [],
      default: []
  },
  contact: {
      type: {
        email: String,
        phone: String,
        address: String,
      },
      required: true
  },
  orders:{
      type: {}
  }
});

module.exports = mongoose.model('userSchema',userSchema);