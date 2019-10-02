// Dependencies =============================================================

var connection = require("../config/connection.js");

// Methods ==================================================================

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, res) {
      if (err) throw err;
      cb(res)
    })
  },
  insertOne: function() {

  },
  updateOne: function() {

  },
}

// Export ===================================================================

module.exports = orm;