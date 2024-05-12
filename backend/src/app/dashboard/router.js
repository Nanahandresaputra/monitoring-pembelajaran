const dashboardController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/dashboard", dashboardController.dashboardData);

module.exports = router;
