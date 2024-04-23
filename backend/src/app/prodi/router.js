const prodiController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/prodi", prodiController.getProdi);
router.post("/prodi", prodiController.addProdi);
router.delete("/prodi/:id", prodiController.deleteProdi);
router.put("/prodi/:id", prodiController.updateProdi);

module.exports = router;
