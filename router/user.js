//Require API Manager
const express = require('express');
const router = express.Router();

const profile = require('./profile');
const User = require('../../structures/user');


router.post('/create',async (req,res)=>{
    //call user request end points
    let user = new User();
    await user.create(req.body);
    
    //return id to phone so it knows whats the id
    res.json(user.id);
})

router.use('/:id', async (req,res)=>{
    //call user request end points
    let id = req.params.id;
    let user = new User(id);
    await user.pull();

    res.json(user);
})


module.exports = router