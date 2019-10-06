$(function () {
  // Function for showing/hiding tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // TODO Change carousel icons

  // On submit, add a new burger
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
  });

  // On menu click
  $(".burgerText").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      menu: false,
      served: true,
      devoured: false
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("changed state: ", newState);
      location.reload();
    })
  })

  // On plate click
  $(".burgerPlate").on("click", function(event) {
    var id = $(this).data("id");

    var newState = {
      menu: false,
      served: false,
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newState
    }).then(function() {
      console.log("changed state: ", newState);
      location.reload();

    })
  })
})