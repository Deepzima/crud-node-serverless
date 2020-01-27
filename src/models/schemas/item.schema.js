/** Dynamoose config **/
import dynamoose from '../../config/dynamodb.config';

/** ENV config **/
import { ENV } from '../../config/env.config';

const ItemSchema = new dynamoose.Schema({
    ID: {
        type: String,
        hashKey: true
    },
    createdAt: String,
    updatedAt: String,
    data: String
}, {
    useNativeBooleans: true,
    useDocumentTypes: true,
});

export default dynamoose.model(ENV.DYNAMO_DB.ITEM_TABLE, ItemSchema);
