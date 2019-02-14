//This is the module for About routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

///Routes
//About homepage
router.get('/', (req, res) => {
	res.render('../views/pages/about');
});

//export this module
module.exports = router;