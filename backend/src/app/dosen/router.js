const dosenController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/dosen", dosenController.getDosen);
router.post("/dosen", dosenController.addDosen);
router.delete("/dosen/:id", dosenController.deleteDosen);
router.put("/dosen/:id", dosenController.updateDosen);

module.exports = router;
