const mahasiswaController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/mahasiswa", mahasiswaController.getMahasiswa);
router.post("/mahasiswa", mahasiswaController.addMahasiswa);
router.delete("/mahasiswa/:id", mahasiswaController.deleteMahasiswa);
router.put("/mahasiswa/:id", mahasiswaController.updateMahasiswa);

module.exports = router;
