/** External libraries **/
import { INTERNAL_SERVER_ERROR, NOT_FOUND, OK } from 'http-status-codes';
// import * as _ from 'lodash';

import { isEmpty } from 'lodash';

/** Item model **/
import Item from '../models/item.model'
import { ErrItemNotFound } from '../errors';

const ItemController = {
    Get: async (req, res) => {
        const { ID } = req.params;

        try {
            const result = await Item.Get(ID);

            if (isEmpty(result)) {
                return res.status(NOT_FOUND).json(ErrItemNotFound);
            }

            return res.status(OK).json(result);
        } catch (e) {
            console.error(e);
            return res.status(INTERNAL_SERVER_ERROR).json(e);
        }
    }
};

export default ItemController;
