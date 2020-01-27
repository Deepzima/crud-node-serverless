/** app.js **/
const express = require('express');
const app = express();

/** CORS option if not using the express ones **/
// const corsOptions = {
//     origin: '*',
//     methods: 'DELETE, GET, HEAD, OPTIONS, PATCH, POST, PUT',
//     allowedHeaders: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
// };

// Integrate CORS options for all routes
app.use(express.json());

// Injecting routes
require('./routes/index.js')(app);

app.get('/', (req, res) => {
    return res.status(200).send({'message': 'YAY! Congratulations! Your first endpoint is working'});
});

module.exports = app;
