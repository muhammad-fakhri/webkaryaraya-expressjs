//This is module for the PIMBAM routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//import the public path from app.js
const publicObj = require('../app.js');

//routes
//PIMBAM homepage
router.get('/', (req, res) => {
	res.render(publicObj.public + '/view/pimbam.pug');
});

//export this module
module.exports = router;