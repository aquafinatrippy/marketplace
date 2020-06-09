const Item = require("../models/Item");

module.exports = {
  addItem: async (req, res) => {
    try {
    console.log(req.file)
    let itemData = {
        Title: req.body.Title,
        seller: req.body.seller,
        description: req.body.description,
        price: req.body.price,
        image: req.file.path
    }
      const item = new Item(itemData);
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
  getItems : async(req, res) => {
      try {
          const item = await Item.find({})
          res.send(item) 
      } catch (error) {
        console.log(error);
          res.send(error)
      }
  }
};
