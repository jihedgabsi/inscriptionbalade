const express = require("express");

const baladeRoutes = require("./balades");
const bateauRoutes = require("./bateau");
const inscriptionsRoutes = require("./inscriptions");

const router = express.Router();

router.use("/api/zrayeb/balade", baladeRoutes);
router.use("/api/zrayeb/bateau", bateauRoutes);
router.use("/api/zrayeb/inscriptions", inscriptionsRoutes);

module.exports = router;