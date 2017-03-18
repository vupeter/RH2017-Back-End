//Require MongoDB MiddleWare
let mongoose = require('mongoose');

module.exports = {
    
    //function for connecting to the database, returns a promise that resolves after connection
    connect: function(){
        return new Promise(resolve=>{
            //Connect to DB, change DB location when we get there
            mongoose.connect('mongodb://localhost/test');

            //Wait for DB to connect
            var db = mongoose.connection;
            
            //connection established
            db.once('open', function() {
                console.log("Mongo DB connected");
                resolve();
            });
        })
    }
}