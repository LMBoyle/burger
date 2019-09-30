// Dependencies =============================================================

var express = require("express");
var routes = require("./controllers/burgersController.js");
var exphbs = require("express-handlebars");

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars ===============================================================

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes ===================================================================

app.use(routes);

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});