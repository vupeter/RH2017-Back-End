//MongoDB schema declation
let mongoose = require('mongoose');

let Schema = mongoose.Schema;

var userSchema = new  mongoose.Schema({
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
  interests:{
      type: {},
      required: true
  },
  eventInterests:{
      type: {},
      required: true
  },
  matches : {
      type: {id: String, confirmed: Boolean }
  }
});

module.exports = mongoose.model('userSchema',userSchema);