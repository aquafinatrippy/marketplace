//imports
const express = require("express");
const router = require("./router");
require("dotenv").config();

const app = express();

app.use("/api", router);

app.listen(process.env.serverPORT, () => {
  console.log(`server running on port ${process.env.serverPORT}`);
});
