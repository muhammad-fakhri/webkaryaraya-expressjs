//Import the necessary module
const express = require('express');
const path = require('path');
const router = express.Router();

//Make an app instance of express module
const app = express();

//Use the port from environment otherwise use 2000
const port = process.env.PORT || 2000;

//defining the public path
const public = path.join(__dirname, 'public');

//import the router module
const kambio = require('./routes/kambio.js');
const pimbam = require('./routes/pimbam.js');
const godata = require('./routes/godata.js');
const pilm = require('./routes/pilm.js');
const about = require('./routes/about.js');

// Setting properties
app.set('views','public/view');
app.set('view engine', 'pug');

//Routes
//Homepage route
app.get('/', (req, res) => {
	// res.sendFile(path.join(public, 'view/index.html'));
	res.render('index'); //Using pug template engine
});

//PIMBAM router
app.use('/pimbam', pimbam);

//KAMBIO router
app.use('/kambio', kambio);

//GODATA router
app.use('/godata', godata);

//PILM router
app.use('/pilm', pilm);

//About router
app.use('/about', about);

//Use public path for all type of http request
app.use('/', express.static(public));


//Make server listening for request
app.listen(port, err => {
	if(err){
		return console.log(err);
	}
	console.log(`Server is listening on port ${port} ....`);
});

//Export component from this module
exports.public = public;