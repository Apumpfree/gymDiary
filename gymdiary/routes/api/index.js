const router = require("express").Router();
const userRoutes = require("./user");

// Book routes

router.use("/user", userRoutes);

console.log("routes.index.js called")

module.exports = router;
