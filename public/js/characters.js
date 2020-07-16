$(document).ready(() => {
  $.get("/people").then(res => console.log(res));
});
