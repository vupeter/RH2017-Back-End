//require express API manager
const express = require('express');
const bodyParser = require('body-parser');

module.exports = {
    init: function(){
        //Declare new express app
        let app = express();
        //Body parse middleware
        var allowCrossDomain = function(req, res, next) {
            res.header('Access-Control-Allow-Origin', 'cryndex.io');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');

            next();
        };
        app.use(allowCrossDomain);
        app.use(bodyParser.urlencoded({extended:true}));
        app.use(bodyParser.json());

        //load all our routes
        app.use(require('./router'));

        //Make the app start listening
        app.listen(3000, function() {
            console.log('Listening on port 3000...');
        })
    }
}