const ItemID = 'b9894650-f038-46e5-94e2-1686e755ebb9';

const Item = {
    ID: ItemID,
    data: 'This is a mocked Item',
    createdAt: "2020-01-20T10:00:00.000Z",
    updatedAt: "2020-01-20T10:00:00.000Z"
};

const mockRequest = (data) => ({ ...data });
const mockResponse = (data) => {
    const res = data || {};

    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);

    return res;
};

export {
    Item,
    ItemID,
    mockRequest,
    mockResponse
};
