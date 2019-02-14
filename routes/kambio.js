//This is the module for KAMBIO routes
//Load the necessary module
const express = require('express');
const router = express.Router();
const path = require('path');

//routes
//KAMBIO homepage
router.get('/', (req, res) => {
	res.render('../views/pages/kambio');
});

//export this module
module.exports = router;