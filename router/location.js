//Require API Manager
const express = require('express');
const router = express.Router();


router.use('/:id/profile', (req,res)=>{
    //call user request end points
    let id = req.params.id;
    profile(id,res)
})


module.exports = router