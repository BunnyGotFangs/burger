$(document).ready(function() {

  // Add Burger to Database Button
  $("#addBurger").on("click", function(){
    //console.log("Add Burger Button Clicked");

    // Create an Object to be Sent to the Backend
   var burger = {
      "burger_name": $(burgerName).val(),
      "devoured": $(burgerName).data("eaten")
    };

    $.post("/api/burger", burger).done(function(response){
      //console.log("Created a New Burger!");
      location.reload();
    });

  }); 

  // Update Burger 

  $(".burgerBlock").on("click", function(){
 

    var burgerID = $(this).data("id");
    var devoured = $(this).data("eaten");

    var burgerUpdate = {
      "devoured": devoured
    };

    //console.log("button id is " + burgerID);

    $.ajax("/api/burger/" + burgerID, {
      type: "PUT",
      data: burgerUpdate
    }).done(function(response){
      //console.log("Burger Updated");
      location.reload();
    });

  }); 

});