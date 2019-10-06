$(function () {
  // Function for showing/hiding tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // TODO Change carousel icons
  $('#carouselIndicators').on('slid.bs.carousel', function() {
    currentIndex = $('div.active').index() + 1;
    var previous = $("#leftIcon");
    var next = $("#rightIcon");

    var icons = {
      utensils: "fa-utensils",
      chalkboard: "fa-chalkboard",
      cash: "fa-hand-holding-usd"
    }

    switch (currentIndex) {
      case (1):
        previous.removeClass(icons.utensils).removeClass(icons.chalkboard).removeClass(icons.cash);
        next.removeClass(icons.utensils).removeClass(icons.chalkboard).removeClass(icons.cash);
        previous.addClass(icons.cash);
        next.addClass(icons.utensils);
        break;
      case (2):
        previous.removeClass(icons.utensils).removeClass(icons.chalkboard).removeClass(icons.cash);
        next.removeClass(icons.utensils).removeClass(icons.chalkboard).removeClass(icons.cash);
        previous.addClass(icons.chalkboard);
        next.addClass(icons.cash);
        break;
      case (3):
        previous.removeClass(icons.utensils).removeClass(icons.chalkboard).removeClass(icons.cash);
        next.removeClass(icons.utensils).removeClass(icons.chalkboard).removeClass(icons.cash);
        previous.addClass(icons.utensils);
        next.addClass(icons.chalkboard);
        break;
    }
    console.log(currentIndex)
  });
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
      "https://media.giphy.com/media/xTiTnuxMQhfXjhXQ4w/giphy.gif",
      "https://cdn.dribbble.com/users/542042/screenshots/6010840/dribble-2.gif",
      "https://media1.tenor.com/images/f8ebf501efc8a7a33e1cec808cd38e5f/tenor.gif?itemid=5333952",
      "https://media1.tenor.com/images/8b6817632c4bb794a8f67c0870307b40/tenor.gif?itemid=4470280"
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
      gifImg.attr("src", menuGifs[Math.floor(Math.random() * menuGifs.length)])
      gifDiv.append(gifImg)
      $(".menuGif").css("display", "block")
      // Wait 5 seconds then reload the page
      // setTimeout(reload, 5000)
    })
  })

  // On plate click
  $(".burgerPlate").on("click", function(event) {
    var id = $(this).data("id");
    var plateGifs = [
      "http://giphygifs.s3.amazonaws.com/media/AAfpHO80onDYk/giphy.gif",
      "https://media.giphy.com/media/mEDJ5JPioxctLKo49q/giphy.gif",
      "https://media.giphy.com/media/5YpIssZR9aNPFCKScs/giphy.gif",
      "https://media.giphy.com/media/MmOAKMzYg4EDqadUCH/giphy.gif",
      "https://media.giphy.com/media/39CaVn6lpm2F2AY9m6/giphy.gif",
      "https://media1.tenor.com/images/f2e1ffd4ebb482d04ebb1d8098de9d64/tenor.gif?itemid=14603317"
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
      gifImg.attr("src", plateGifs[Math.floor(Math.random() * plateGifs.length)])
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