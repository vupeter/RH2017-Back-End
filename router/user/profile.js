//Require API Manager
const express = require('express');
const router = express.Router();

const User = require('../../structures/user');

const getProfile = async function(id,res){

    let user = new User(id);
    await user.pull();
    //user pulled from the database now can use it
    /* example user Object
    {
        name: "jimmy",
        avatarURL: 'test',
        description: 'wtf',
        interests: {test:'test'},
        eventInterests: {test:'test'}
    }
    */
    res.json(user);
}


module.exports = getProfile