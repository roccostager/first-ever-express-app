#!/usr/bin/env node
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'pages/index.html'));
});
app.get('/about', (request, response) => {
    response.sendFile(path.join(__dirname, 'pages/about-me.html'));
});
app.get('/contact', (request, response) => {
    response.sendFile(path.join(__dirname, 'pages/contact.html'));
});
app.use((request, response) => {
    response.sendFile(path.join(__dirname, 'pages/404.html'));
});

app.listen(port, error => {
	if (error) {
		throw error;
	}
	console.log('Server listening on port ' + port);
});