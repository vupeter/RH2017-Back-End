//Require API Manager
const express = require('express');
const router = express.Router();

const User = require('../structures/user');


router.post('/create',async (req,res)=>{
    //call user request end points
    let user = new User();
    console.log('created user');
    await user.create(req.body);
    
    //return id to phone so it knows whats the id
    res.json(user.id);
})

router.use('/:id/book/:location/:duration/:date', async (req, res)=>{
	console.log('started insert');
	let id = req.params.id;
	let user = new User(id);
	await user.addLocation(req.params.location, req.params.duration, req.params.date);
	console.log('added location to user');
	let location = new Location(req.params.location);
	await location.addBooking(id);
	console.log('added booking');
})

router.use('/:id', async (req,res)=>{
    //call user request end points
    let id = req.params.id;
    let user = new User(id);
    await user.pull();
	console.log('got uesr');
    res.json(user);
})


module.exports = router