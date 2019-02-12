//This is the module for GODATA routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//import the public path from app.js
const publicObj = require('../app.js');

//routes
//GODATA homepage
router.get('/', (req, res) => {
	res.sendFile(path.join(publicObj.public, 'view/godata.html'));
});

//export this module
module.exports = router;