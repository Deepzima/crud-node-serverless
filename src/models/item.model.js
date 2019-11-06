/** Third Party **/
const dynamoose = require('../config/dynamodb.config');

/** Env **/
import { ENV } from '../config/env.config';

const Schema = dynamoose.Schema;

const ItemSchema = new Schema({
    set_ID: {
        type: String,
        hashKey: true
    },
    created_at: String,
    updated_at: String,
    data: String

}, {
    useNativeBooleans: true,
    useDocumentTypes: true,
});

module.exports = dynamoose.model(ENV.DYNAMO_DB.ITEM_TABLE, ItemSchema);