const router = require("express").Router();
const logRoutes = require("./logs");
const userRoutes = require("./users")

// Book routes
router.use("/logs", logRoutes);
router.use("/users", userRoutes);

module.exports = router;
