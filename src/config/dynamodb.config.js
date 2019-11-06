'use strict';

import { ENV } from './env.config'


const dynamoose = require('dynamoose');

dynamoose.setDefaults(
    {
        create: false,
        waitForActive: false
    });

dynamoose.AWS.config.update({
    region: "eu-west-1"
});

if(!ENV.DYNAMO_DB.IS_OFFLINE) {
    console.log("is local");
    dynamoose.local('http://localhost:4569')
}



module.exports = dynamoose;