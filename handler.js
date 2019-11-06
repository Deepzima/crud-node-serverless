
'use strict';
const awsless = require('aws-serverless-express');

const app = require('./src/app');
const server = awsless.createServer(app);

exports.main = (event, context) => { awsless.proxy(server, event, context) };