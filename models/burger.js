var orm = require("../config/orm.js");


var burger = {

  selectAll : function(callback) {

    orm.selectAll("burgers", function(results) {
      callback(results);
    });
  },

  // array
  insertOne : function(cols, vals, callback) {

  // data going to DB
    orm.insertOne("burgers", cols, vals, function(result) {
      callback(result);
    });
  },
//change of db
  updateOne : function(cols, vals, condition, callback) {
    orm.updateOne("burgers", cols, vals, condition, function(result) {
      callback(result);
    });
  }
}; 
module.exports = burger;
