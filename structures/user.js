//User class constructor
var userSchema = require('../schemas/userSchema');
var Location = require('./location');

//declare new class user
class User {
    
    //constructor, runs and creates internal properties
    constructor(id) {
        if(id) this.id = id;
    }

    pull(){
        return new Promise(resolve=>{
            userSchema.findOne({_id: this.id}).exec().then(user=>{
                this.id = user._id;
				this.owner = user.owner;
                this.name = user.name;
                this.avatarURL = user.avatarURL;
                this.description = user.description;
                this.ratings = user.ratings;
				this.contact = user.contact;
				this.orders = user.orders;
                resolve(0);
            })
        })
    }

    create(profile){
        return new Promise(resolve=>{
            let user = new userSchema(profile);
            user.save((err,user)=>{
                if(err)console.log(err);
                this.id = user._id
                this.name = user.name;
                this.avatarURL = user.avatarURL;
                this.description = user.description;
                this.ratings = user.ratings;
				this.contact = user.contact;
				this.orders = user.orders;
                resolve();
            });
        })
    }
	
	addLocation(locationID, duration, date){
		return new Promise(resolve=>{
			userSchema.findOne({_id: this.id}).exec().then(async user=>{
				let location = new Location(locationID);
				await location.pull();
				this.orders = user.orders;
				console.log('hi '+duration+date);					
				this.orders[locationID]={cost:duration*location.price, duration:duration, start:date};
				console.log(123);
				userSchema.update({_id: this.id}, this ,function(err, doc){
					if(err) console.log(err)
					console.log(321);
					resolve();
				});	
			})
		})
	};
}

module.exports = User;