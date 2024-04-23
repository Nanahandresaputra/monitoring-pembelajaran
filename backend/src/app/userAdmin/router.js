const userController = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/users", userController.getUsers);
router.post("/users", userController.addUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);

module.exports = router;
