const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/log"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/log/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;