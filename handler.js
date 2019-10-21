
const serverless = require('serverless-http');
const app = require('./src/app');

module.exports.main = serverless(app);




