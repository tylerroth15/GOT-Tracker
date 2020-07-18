$(document).ready(() => {
  let characters;
  $.get("/people").then(res => {
    characters = res;
    // When user clicks update-btn
    characters.forEach((character, index) => {
      $("#update-btn-" + index).on("click", event => {
        event.preventDefault();
        const charToUpdate = {
          person: characters[event.target.name].person,
          title: $("#title-" + index)
            .val()
            .trim(),
          livingDead: $("#livingDead-" + index).val(),
          house: $("#house-" + index).val(),
          loyalty: $("#loyalty-" + index)
            .val()
            .trim()
        };
        // Send an AJAX POST-request with jQuery
        updateCharacter(charToUpdate);
      });
    });
  });

  function updateCharacter(charToUpdate) {
    $.ajax({
      url: `/people/${charToUpdate.id}`,
      type: "PUT",
      data: charToUpdate
    }).then(() => {
      // Make get request to refresh view
      // Need to prepopulate input fields with values from the db for each person
      $.get("/people").then(res => {
        characters = res;
      });
    });
  }
});
