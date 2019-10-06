$(function () {
  // Function for showing/hiding tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // TODO Change carousel icons
  // TODO Stay on page when reload

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
  // TODO keep all items on menu and add to a different table for plate & stomach
  // TODO prevent too many burgers on plate or stomach
  $(".burgerText").on("click", function(event) {
    var id = $(this).data("id");
    var menuGifs = [
      "https://media.giphy.com/media/l2SpNLZQSlENDKAkU/giphy.gif",
      "https://media.giphy.com/media/3o7TKUGccxlaQqdgRO/giphy.gif",
      "https://media.giphy.com/media/xTiTnuxMQhfXjhXQ4w/giphy.gif"
    ]

    var gifDiv = $(".menuGif")
    var gifImg = $("<img>")

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
      // Show gif 
      gifDiv.empty();
      gifImg.attr("src", menuGifs[Math.floor(Math.random() * 3)])
      gifDiv.append(gifImg)
      $(".menuGif").css("display", "block")
      // Wait 5 seconds then reload the page
      setTimeout(reload, 5000)
    })
  })

  // On plate click
  $(".burgerPlate").on("click", function(event) {
    var id = $(this).data("id");
    var plateGifs = [
      "http://giphygifs.s3.amazonaws.com/media/AAfpHO80onDYk/giphy.gif",
      "https://media.giphy.com/media/mEDJ5JPioxctLKo49q/giphy.gif",
      "https://media.giphy.com/media/5YpIssZR9aNPFCKScs/giphy.gif",
      "https://media.giphy.com/media/MmOAKMzYg4EDqadUCH/giphy.gif"
    ]

    var gifDiv = $(".plateGif")
    var gifImg = $("<img>")

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
      // Show gif 
      gifDiv.empty();
      gifImg.attr("src", plateGifs[Math.floor(Math.random() * 4)])
      gifDiv.append(gifImg)
      $(".plateGif").css("display", "block")
      // Wait 5 seconds then reload the page
      setTimeout(reload, 5000)
    })
  })

  function reload() {
    location.reload();
  }
})