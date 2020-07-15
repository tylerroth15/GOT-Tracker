// Code here handles what happens when a user submits a new character on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
// when user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a newCharacter obj
    var newPerson = {
      // name from name input
      person: $("#person").val().trim(),
      // role from role input
      title: $("#title").val().trim(),
      // age from age input
      livingDead: $("#livingDead").val().trim(),
      // points from force-points input
      houseId: $("#houseId").val().trim(),
      loyalty: $("loyalty").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/new", newPerson)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        // tell the user we're adding a character with an alert window
        return ("Person added, Winter is coming...");
      });
  
    // empty each input box by replacing the value with an empty string
    $("#person").val("");
    $("#title").val("");
    $("#livingDead").val("");
    $("#houseId").val("");
    $("#loyalty").val("");
  
    });
