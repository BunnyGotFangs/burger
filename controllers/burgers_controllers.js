// varianle needed
var express = require("express");
var router = express.Router(); 
var burger = require("../models/burger.js");

//build routes

router.get("/", function(req, res) {
    console.log("You are Enroute");
    burger.selectAll(function(data) {
      handlebarsObject = {
        burger: data
      };
      console.log("See Burger");
      res.render("index", handlebarsObject);
    });

});

//post
router.post("/api/burger", function(req, res) {
  console.log("Burger Route Hit");
  burger.insertOne(["burger_name","devoured"], [req.body["burger_name"], req.body.devoured], function(result){
// Send ID
    res.json(result);
  });
});
//put
router.put("/api/burger/:id", function(req, res) {

  var burgerID = req.params.id
  var condition = "id = " + burgerID ;

  console.log("burger Route Hit. ID is "+ burgerID);
  console.log("Dev is " + req.body.devoured);

  burger.updateOne(["devoured"], [req.body.devoured], condition, function(result) {
// Send ID  
    res.json(result);
  });
});

// Export routes for server.js to use.
module.exports = router;