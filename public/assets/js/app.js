$(function () {
  $(".newBurger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burgerName: $("#bur").val().trim(),
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New burger added");
        location.reload();
      }
    )
  })
})