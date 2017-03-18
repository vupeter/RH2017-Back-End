const eventSchema = require('../schemas/eventSchema');

const intervalFrequency = 600000 //ms, 600,000 = 10min

module.exports = function(){
    //starts the interval
    setInterval(function(){
        eventSchema.find({},function(err,events){
            for(let event of events){
                //loop through events
                //check if theres people in event, if so active = true
                //check if event is full, if so matched = true
                //check if everyone confirmed, if so confirmed = true
                //check if anyone cancelled, if so matched = false, remove person from array
            }
        });
    },intervalFrequency)
}


