//Require API Manager
const express = require('express');
const router = express.Router();

//Declare further routes here
router.use('/user', require('./user'));
router.use('/location', require('./location'));


module.exports = router