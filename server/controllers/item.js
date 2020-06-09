const Item = require("../models/Item");

module.exports = {
  addItem: async (req, res) => {
    try {
    console.log(req.file)
      const item = new Item(req.body);
      await item.save();
      res.status(200).json(item);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  },
};
