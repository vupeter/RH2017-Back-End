//Require API Manager
const express = require('express');
const router = express.Router();

const User = require('../../structures/user');

/*fields example input:
{
    name: "jimmy",
    avatarURL: 'test',
    description: 'wtf',
    interests: {test:'test'},
    eventInterests: {test:'test'}
}
*/

const createUser = async function(fields,res){
    let user = new User();
    await user.create(fields);
    
    //return id to phone so it knows whats the id
    res.json(user.id);
}


module.exports = createUser