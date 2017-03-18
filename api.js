//require express API manager
const express = require('express');

module.exports = {
    init: function(){
        //Declare new express app
        let app = express();
        //load all our routes
        app.use(require('./router'));

        //Make the app start listening
        app.listen(3000, function() {
            console.log('Listening on port 3000...');
        })
    }
}