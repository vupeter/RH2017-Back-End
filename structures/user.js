//User class constructor
var userSchema = require('../schemas/userSchema');

//declare new class user
class User {
    
    //constructor, runs and creates internal properties
    constructor(id) {
        if(id) this.id = id;
    }
/*
    get id(){
        return this._id;
    }
    get name(){
        return;
    }
    get avatarURL(){
        return;
    }
    get description(){
        return;
    }
    get interests(){
        return;
    }
    get eventInterests(){
        return this.eventInterests;
    }
    */

    pull(){
        return new Promise(resolve=>{
            userSchema.findOne({_id: this.id}).exec().then(user=>{
                this.id = user._id
                this.name = user.name;
                this.avatarURL = user.avatarURL;
                this.description = user.description;
                this.interests = user.interests;
                this.eventInterests = user.eventInterests;
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
                this.interests = user.interests;
                this.eventInterests = user.eventInterests;
                resolve();
            });
        })
    }

}

module.exports = User;