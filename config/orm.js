// MySQL connection
var connection = require("../config/connection.js");

var tableName = "burgers";

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

var orm = {

//select all
  selectAll : function(tableName, callback)  {

   var queryStatement = `SELECT * FROM ${tableName};`;

    connection.query(queryStatement, function(error, result) {
      if (error) throw error;
      callback(result);
    });

  },
//add one
  insertOne: function(tableName, cols, vals, callback) {

    var queryStatement = `INSERT INTO  ${tableName} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)});`;

    connection.query(queryStatement, vals, function(error, result) {
      if (error) throw error;
      console.log("Yummmm");
      callback(result);
    });

  },
//change one
  updateOne : function(tableName, cols, vals, condition, callback) {

   var queryStatement = `UPDATE ${tableName} SET ${cols.toString()} = ? WHERE ${condition}`;

    connection.query(queryStatement, vals, function(error, result) {
      if (error) throw error;
      console.log("Order Changed");

      callback(result);
    });

  }

}

module.exports = orm;