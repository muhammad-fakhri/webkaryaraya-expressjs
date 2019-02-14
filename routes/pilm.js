//This is the module for PILM routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//Routes
//PILM homepage
router.get('/', (req, res) => {
	res.render('../views/pages/pilm');
});

//export this module
module.exports = router;