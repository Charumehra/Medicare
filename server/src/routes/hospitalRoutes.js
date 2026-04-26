const express = require("express");
const router = express.Router();
const controller = require("../controllers/hospitalController");

router.get("/seed", controller.seed);
router.get("/", controller.getHospitals);

module.exports = router;