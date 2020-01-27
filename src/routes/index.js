/** External libraries **/
import { createValidator } from 'express-joi-validation';
const validator = createValidator({});

/** Controllers **/
import ItemController from '../controllers/item.controller';

/** Validators **/
import { itemParamsSchema } from '../validators/item.validators';

module.exports = (app) => {
    app.get('/api/item/:ID', validator.params(itemParamsSchema), ItemController.Get);
};
