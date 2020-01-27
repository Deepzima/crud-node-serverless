/**  Item Dynamoose Schema **/
import ItemSchema from './schemas/item.schema';

/**  Errors **/
import { ErrIdNotDefined } from '../errors';

const ItemModel = {
    Get: async (ID) => {
        if (!ID) {
            throw Error(ErrIdNotDefined);
        }

        return await ItemSchema.get(ID);
    }
};

export default ItemModel;
