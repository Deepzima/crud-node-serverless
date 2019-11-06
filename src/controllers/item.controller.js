import * as Item from '../models/item.model'

const Get = async (req, res) => {
    console.log(req.params);

    await Item.get(req.params.ID).then((data) => {
        console.log(data);
        res.json(data);
    });

};

module.exports = {
    Get
};
