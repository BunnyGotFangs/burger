
var express = require("express"); 
var bodyParser = require("body-parser"); 
var exphbs = require("express-handlebars"); 


// Initalise Express Server
var app = express(); 

var PORT = process.env.PORT || 8080; 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static("public")); 

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controllers.js");
app.use("/", routes);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});