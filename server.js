const debug =require('debug')('server:debug');
const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const PORT = process.env.NODE_PORT || 5000;

const listen = server.listen(PORT, () => {
    debug(`server is running on port ${PORT}`);
    console.log(`Listening to port ${PORT}`);
});


module.exports.port = listen.address().port;