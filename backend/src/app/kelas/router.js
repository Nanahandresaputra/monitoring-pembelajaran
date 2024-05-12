const kelasController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/kelas", kelasController.getKelas);
router.get("/kelas/:id", kelasController.getKelasDetail);
router.post("/kelas", kelasController.addKelas);
router.delete("/kelas/:id", kelasController.deleteKelas);
router.put("/kelas/:id", kelasController.updateKelas);

module.exports = router;
