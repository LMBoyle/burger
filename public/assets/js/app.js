$(function () {
  $('[data-toggle="tooltip"]').tooltip()

  $(".newBurger").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burgerName: $("#bur").val().trim(),
    }
    console.log(newBurger)

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