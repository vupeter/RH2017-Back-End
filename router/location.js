//Require API Manager
const express = require('express');
const router = express.Router();

const Location = require('../structures/location');

router.post('/create',async (req,res)=>{
    //call location request end points
    let location = new Location();
    console.log(req.body);
    await location.create(req.body);
    
    //return id to phone so it knows whats the id
    res.json(location.id);
})

router.use('/:id/profile', (req,res)=>{
    //call user request end points
    let id = req.params.id;
    let location = new Location();
	await location.pull();
	
	res.json(location);
})


module.exports = router