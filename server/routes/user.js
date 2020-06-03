const express = require("express");
const controller = require("../controllers/user");

const router = express.Router();

router.post("/register", controller.createUser);
router.post('/login', controller.loginUser)

module.exports = router;
