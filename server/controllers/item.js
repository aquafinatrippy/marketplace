const Item = require("../models/Item");

module.exports = {
  addItem: async (req, res) => {
    try {
    console.log(req.file)
    // let itemData = {
    //     Title: req.body.Title,
    //     seller: req.body.seller,
    //     description: req.body.description,
    //     price: req.body.price,
    //     item: req.file.filename
    // }
      const item = new Item(req.body);
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
};
