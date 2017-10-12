
const router = require("express").Router();
const userRoutes = require("./");


router.use("/App", userRoutes);

module.exports = router;