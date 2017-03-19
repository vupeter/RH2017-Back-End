//Require API Manager
const express = require('express');
const router = express.Router();

//Declare further routes here
router.use('/api/ru/user', require('./user'));
router.use('/api/ru/location', require('./location'));
console.log(router);


module.exports = router