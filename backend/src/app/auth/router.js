const express = require("express");
const authController = require("./controller.js");
const router = express.Router();

router.post("/login", authController.login);
router.put("/logout", authController.logout);

module.exports = router;
