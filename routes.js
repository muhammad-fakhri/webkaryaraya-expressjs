//Import the necessary module
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

//Import the route module
const kambio = require('./routes/kambio.js');
const pimbam = require('./routes/pimbam.js');
const godata = require('./routes/godata.js');
const pilm = require('./routes/pilm.js');
const about = require('./routes/about.js');

//Register Router Here
const route = app
	//Homepage
	.get('/', (req, res) => res.render('pages/index'))
	//PIMBAM router
	.use('/pimbam', pimbam)
	//KAMBIO router
	.use('/kambio', kambio)
	//GODATA router
	.use('/godata', godata)
	//PILM router
	.use('/pilm', pilm)
	//About router
	.use('/about', about);

//Export this module
exports.routes = route;