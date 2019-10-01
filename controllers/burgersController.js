// Dependencies =============================================================

var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes ===================================================================

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var objectAll = {
      burgers: data
    }
    console.log(objectAll);
    res.render("index", objectAll)
  })
})

// Export ===================================================================

module.exports = router;