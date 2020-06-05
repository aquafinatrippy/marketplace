//imports
const express = require("express");
const cors = require("cors");
const router = require("./router");
const bodyparser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
