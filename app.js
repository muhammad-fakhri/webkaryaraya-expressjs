//Import the necessary module
const express = require('express');
const path = require('path');
const router = require('./routes.js');

//Make an app instance of express module
const app = express();

//Use the port from environment otherwise use 2000
const port = process.env.PORT || 2000;

//Access public for static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting properties
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


//Route goes here
app.use('/', router.routes);

//Make server listening for request
app.listen(port, err => {
	if(err){
		return console.log(err);
	}
	console.log(`Server is listening on port ${port} ....`);
});