const express = require("express");
const controller = require("../controllers/user");

const router = express.Router();

router.get("/", controller.test);

module.exports = router;
