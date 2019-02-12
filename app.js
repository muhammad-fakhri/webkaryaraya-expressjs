//Import the express module
const express = require('express');
const path = require('path');
const router = express.Router();
const public = path.join(__dirname, 'public');

//Make an app instance of express module
const app = express();

//Use the port from environment otherwise use 2000
const port = process.env.PORT || 2000;

//Routes
app.get('/', (req, res) => {
	res.sendFile(path.join(public, 'index.html'));
});

app.get('/pimbam', (req, res) => {
	res.sendFile(path.join(public, 'pimbam.html'));
});

app.use('/', express.static(public));

//Make server listening for request
app.listen(port, err => {
	if(err){
		return console.log(err);
	}
	console.log(`Server is listening on port ${port} ....`);
});