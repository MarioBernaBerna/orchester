
const express = require("express");
const router = express.Router();

const orchesterController = require("../controllers/orchesterController");

router.post("/run", orchesterController.run);
router.get("/health", orchesterController.health);

module.exports = router;