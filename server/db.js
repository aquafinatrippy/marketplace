const mongoose = require("mongoose");

mongoose.connect(process.env.DBstring, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

module.exports = db;
