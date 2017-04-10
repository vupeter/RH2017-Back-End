//Require API Manager
const express = require('express');
const router = express.Router();

const Location = require('../structures/location');

router.use('/all',(req,res)=>{
    require('../schemas/locationSchema').find({},function(err,locations){
        if(!err && locations) res.json(locations);
    })
})

router.post('/create',async (req,res)=>{
    //call location request end points
    let location = new Location();
    console.log(req.body);
    await location.create(req.body);
    
    //return id to phone so it knows whats the id
    res.json(location.id);
})

router.use('/:id', async (req,res)=>{
    //call user request end points
    let id = req.params.id;
    let location = new Location(id);
	await location.pull();
	res.json(location);
})


module.exports = router