$(document).ready(() => {
  $.get("/people").then(res => console.log(res));
});

// When user clicks update-btn
$("#update-btn").on("click", event => {
  event.preventDefault();

  // Update Character object
  const updateChar = {
    alive: $("#livingDead")
      .val(),
      // .trim(),
    house: $("#house")
      .val(),
      // .trim(),
    title: $("#title")
      .val(),
      // .trim(),
    loyalty: $("#loyalty")
      .val()
      // .trim()
  };
  // Send an AJAX POST-request with jQuery
  $.post("/api/new", updateChar)
    // On success, run the following code
    .then(data => {
      // Log the data we found
      console.log(data);
    });
});
