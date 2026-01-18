#!/usr/bin/env node

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
	response.send('hello, word!');
});

app.listen(port, error => {
	if (error) {
		throw error;
	}
	console.log('Server listening on port ' + port);
});