//Import the express module
const express = require('express');
const router = express.Router();
const path = require('path');

//Make an app instance of express module
const app = express();

//Use the port from environment otherwise use 2000
const port = process.env.PORT || 2000;

app.get('/', (req, res) => {
	// res.send("Hello world!");
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/home', (req, res) => {
	// res.send("Welcome to home page guys !");
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/pimbam', (req, res) => {
	// res.send('This is the pimbam site');
	res.sendFile(path.join(__dirname+'/content/menu.html'));
});

app.use('/', router);

app.listen(port, err => {
	if(err){
		return console.log(err);
	}
	console.log(`Server is listening on port ${port} ....`);
});