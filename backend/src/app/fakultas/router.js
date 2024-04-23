const fakultasController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/fakultas", fakultasController.getFakultas);
router.post("/fakultas", fakultasController.addFakultas);
router.delete("/fakultas/:id", fakultasController.deleteFakultas);
router.put("/fakultas/:id", fakultasController.updateFakultas);

module.exports = router;
