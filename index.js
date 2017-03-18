//require our api interface
const api = require('./api');
//require our database interface
const database = require('./database');

//run our connection script, init out API app after it finishes
database.connect().then( ()=>{
    api.init();
  }
).catch(reason=>{console.log(reason)});