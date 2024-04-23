const matkulController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/matkul", matkulController.getMatkul);
router.post("/matkul", matkulController.addMatkul);
router.delete("/matkul/:id", matkulController.deleteMatkul);
router.put("/matkul/:id", matkulController.updateMatkul);

module.exports = router;
