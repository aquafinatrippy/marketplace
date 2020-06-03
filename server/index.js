//imports
const express = require("express");
const router = require("./router");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
