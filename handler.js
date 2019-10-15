const serverless = require('serverless-http');
const app = require('./app');

module.exports.main = serverless(app);