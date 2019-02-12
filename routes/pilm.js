//This is the module for PILM routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//import the public path from app.js
const publicObj = require('../app.js');

///routes
//PILM homepage
router.get('/', (req, res) => {
	res.sendFile(path.join(publicObj.public, 'view/pilm.html'));
});

//export this module
module.exports = router;