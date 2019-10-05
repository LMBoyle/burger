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
  });
});

router.get("/api/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var objectAll = {
      burgers: data
    }
    res.json(objectAll)
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(req.body.burgerName, function(result) {
    res.json({id: result.insertId})
  });
})

// Export ===================================================================

module.exports = router;