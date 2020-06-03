const express = require("express");
const controller = require("../controllers/user");

const router = express.Router();

router.get("/", controller.test);
router.post('/register', controller.createUser)

module.exports = router;
