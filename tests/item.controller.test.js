import ItemController from '../src/controllers/item.controller';

jest.mock('../src/models/item.model', () => ({
    Get: jest.fn()
}));

import ItemModel from '../src/models/item.model';
import { Item, ItemID } from './mocks';
import { ErrItemNotFound } from '../src/errors';

describe('Item Controller', () => {
    const params = { ID: ItemID };
    let mockRequest, mockResponse;

    beforeEach(() => {
        mockRequest = require('./mocks').mockRequest;
        mockResponse = require('./mocks').mockResponse;
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('[GET] Should return the item', async () => {
        ItemModel.Get.mockImplementation(() => Item);

        const req = mockRequest({ params });
        const res = mockResponse();

        await ItemController.Get(req, res);

        expect(ItemModel.Get).toBeCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(Item);
    });

    it('[GET] Should return 404 if the item does not exist', async () => {
        ItemModel.Get.mockImplementation(() => {});

        const req = mockRequest({ params });
        const res = mockResponse();

        await ItemController.Get(req, res);

        expect(ItemModel.Get).toBeCalledTimes(1);
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith(ErrItemNotFound);
    });
});
