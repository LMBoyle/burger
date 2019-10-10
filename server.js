// Dependencies =============================================================

var express = require("express");
var routes = require("./controllers/burgersController.js");
var exphbs = require("express-handlebars");
const handlebars = require('handlebars');
const repeat = require('handlebars-helper-repeat');

// Express ==================================================================

var app = express();
var PORT = process.env.PORT || 1745;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Handlebars ===============================================================

var hbs = exphbs.create({
  defaultLayout: "main",
  helperRepeat: handlebars.registerHelper('repeat', repeat),
})

app.set("view engine", "handlebars");
app.engine("handlebars", hbs.engine);

// Routes ===================================================================

app.use(routes);

// Listen ===================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});