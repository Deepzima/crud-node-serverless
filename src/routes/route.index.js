

/** Controllers **/
import * as ItemController from '../controllers/item.controller';

module.exports = (app) => {
    app.get('/api/item/:ID',  ItemController.Get);

};