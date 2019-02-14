//This is module for the PIMBAM routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//Routes
//PIMBAM homepage
router.get('/', (req, res) => {
	res.render('../views/pages/pimbam');
});

//export this module
module.exports = router;