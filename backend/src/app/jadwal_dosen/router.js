const jadwalDosenController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/jadwalDosen", jadwalDosenController.getJadwalDosen);
router.post("/jadwalDosen", jadwalDosenController.addjadwalDosen);
router.delete("/jadwalDosen/:id", jadwalDosenController.deletejadwalDosen);
router.put("/jadwalDosen/:id", jadwalDosenController.updatejadwalDosen);

module.exports = router;
