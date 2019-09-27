// Dependencies =============================================================

var express = require("express");

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});