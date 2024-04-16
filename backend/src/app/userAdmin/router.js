const userRouter = require("./controller.js");
const expres = require("express");
const router = expres.Router();

router.get("/users", userRouter.getUsers);
router.post("/users", userRouter.addUser);
router.delete("/users/:id", userRouter.deleteUser);
router.put("/users/:id", userRouter.updateUser);

module.exports = router;
