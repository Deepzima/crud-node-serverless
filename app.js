
// app.js
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

module.exports = app;