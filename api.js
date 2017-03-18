//require express API manager
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

module.exports = {
    init: function(){
        //Declare new express app
        let app = express();
        //Body parse middleware
        app.use(cors({origin: '*'}));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended:false}));

        //load all our routes
        app.use(require('./router'));

        //Make the app start listening
        app.listen(3000, function() {
            console.log('Listening on port 3000...');
        })
    }
}