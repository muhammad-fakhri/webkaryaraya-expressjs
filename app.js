//Import the express module
const express = require('express');
const router = express.Router();
const path = require('path');
const public = path.join(__dirname, 'Web-Karya-Raya');

//Make an app instance of express module
const app = express();

//Use the port from environment otherwise use 2000
const port = process.env.PORT || 2000;

//initializing first access index.html
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/pimbam', (req, res) => {
	res.send('PIMBAM COY!');
});

app.use('/', express.static(public));

app.listen(port, err => {
	if(err){
		return console.log(err);
	}
	console.log(__dirname);
	console.log(`Server is listening on port ${port} ....`);
});