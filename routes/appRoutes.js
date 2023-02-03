const express = require("express");
const router = express.Router();

const appController = require("../controllers/appController");

router.post("/init", appController.initialize);

module.exports = router;
