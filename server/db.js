const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DBstring, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;

db.on("error", (err) => {
  console.log(err);
});

module.exports = mongoose;
