const dosenRouter = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/dosen", dosenRouter.getDosen);
router.post("/dosen", dosenRouter.addDosen);
router.delete("/dosen/:id", dosenRouter.deleteDosen);
router.put("/dosen/:id", dosenRouter.updateDosen);

module.exports = router;
