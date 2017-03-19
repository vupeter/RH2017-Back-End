//Location class constructor
var locationSchema = require('../schemas/locationSchema');

//declare new class location
class Location {
    
    //constructor, runs and creates internal properties
    constructor(id) {
        if(id) this.id = id;
    }

    pull(){
        return new Promise(resolve=>{
            locationSchema.findOne({_id: this.id}).exec().then(location=>{
                console.log(location);
                this.id = location._id
                this.ownerID = location.ownerID;
                this.address = location.address;
				this.rating = location.rating;
				this.price = location.price;
				this.capacity = location.capacity;
				this.availability = location.availability;
				this.bookings = location.bookings;
                resolve(0);
            })
        })
    }

    create(profile){
        return new Promise(resolve=>{
            let location = new locationSchema(profile);
            location.save((err,location)=>{
                if(err)console.log(err);
                this.id = location._id
                this.ownerID = location.ownerID;
                this.address = location.address;
				this.rating = location.rating;
				this.price = location.price;
				this.capacity = location.capacity;
				this.availability = location.availability;
				this.bookings = location.bookings;
                resolve();
            });
        })
    }
	
	addBooking(userID, duration, date){
		return new Promise(resolve=>{
			console.log('here2')
			if (!this.bookings[userID]) {
				this.bookings[userID] = [];
			}
			this.bookings[userID].push({cost:duration*location.price, duration:duration, start:date});
			console.log('here3')
			locationSchema.update({_id: this.id}, this, {upsert: true}, function(err, doc){resolve()});
			console.log('here4')
			})}
}
module.exports = Location;
