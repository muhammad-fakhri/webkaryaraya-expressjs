//This is the module for GODATA routes
//Load the necessary module
const express = require('express');
const router = express.Router();

//routes
//GODATA homepage
router.get('/', (req, res) => {
	res.render('../views/pages/godata');
});

//export this module
module.exports = router;