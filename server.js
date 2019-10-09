// Dependencies =============================================================

var express = require("express");
var routes = require("../burger/controllers/burgersController.js");
var exphbs = require("express-handlebars");
const handlebars = require('handlebars');
const repeat = require('handlebars-helper-repeat');


// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars ===============================================================

var hbs = exphbs.create({
  defaultLayout: "main",
  helperRepeat: handlebars.registerHelper('repeat', repeat),
  customHelper: handlebars.registerHelper("test", function() {
    var testArr = ["Test 1", "Test 2", "Working yay!"]
    var testObj = {
      test: "test1"
    }
    console.log(testObj)
    return testObj
  })
})

app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

// Routes ===================================================================

app.use(routes);

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});