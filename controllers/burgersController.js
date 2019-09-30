// Dependencies =============================================================

var express = require("express");
var router = express.Router();
var connection = require("../models/burger.js");

// Routes ===================================================================

router.get("/", function(req, res) {
  res.render("index")
})

// Export ===================================================================

module.exports = router;