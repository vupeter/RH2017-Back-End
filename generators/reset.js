let mongoose = require('mongoose');
let Location = require('../schemas/locationSchema');
let User = require('../schemas/userSchema')

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
            
db.once('open', function() {
    console.log("Mongo DB connected");
    Location.remove({}, ()=>{});
    User.remove({}, ()=>{});
});