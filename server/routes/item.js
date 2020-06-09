const express = require("express");
const controller = require("../controllers/item");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

router.post("/", upload.single("image"), controller.addItem);

module.exports = router;