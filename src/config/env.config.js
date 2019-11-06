export const ENV = {
    REGION: process.env.REGION || "eu-west-1",
    DYNAMO_DB : {
        IS_OFFLINE : process.env.DYNAMO_DB_IS_OFFLINE || true,
        ENDPOINT : process.env.DYNAMO_DB_ENDPOINT,
        ITEM_TABLE : process.env.DYNAMO_DB_ITEM_TABLE || "dev-items-dynamodb-table",
    }
};
