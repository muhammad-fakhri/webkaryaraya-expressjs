const express = require('express');
const app = express();

const PORT = 4000;
app.listen(PORT, () => {
	console.log("Server is active. Ready to receive request from port 4000.");
});

//Array Data
const name = {
	title: 'Raise of the dawn',
	page: 240
};

//Routes
app.get('/', (req, res, next) => {
	res.send(name);
});

//Get single data
app.get('/:no', (req, res, next) => {
	res.send(name[req.params.no]);
});

//Create new data
app.post('/')