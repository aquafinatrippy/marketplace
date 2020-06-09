const mongoose = require("../db");

const ItemSchema = mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  
    image: {
      type: String,
      data: Buffer,
    },
});

const Item = mongoose.model("Item", ItemSchema);

module.exports = Item;