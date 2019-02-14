//This is the module for About routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//import the public path from app.js
const publicObj = require('../app.js');

///routes
//About homepage
router.get('/', (req, res) => {
	res.render(publicObj.public + '/view/about.pug');
});

//export this module
module.exports = router;