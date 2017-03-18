//MongoDB schema declation
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new  mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  avatarURL:{
      type: string,
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
  }
});

module.exports = mongoose.model('user',user);