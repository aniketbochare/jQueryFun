
//animate() Font Size
/*
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "3em"
    }, 1000);
  });
});*/

//animate() Width
/*
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "3em",
      "width": "50%"
    }, 1000);
  });
});*/

//animate() left property
/*
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "3em",
      "width": "50%",
      "left": "100px"
    }, 1000);
  });
});
*/

//animate() left property by incrementing
/*
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "3em",
      "width": "50%",
      "left": "+=100px"
    }, 1000);
  });
})*/

//animate() Font Size using "toggle" value
/*
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "hide",
      "width": "50%",
      "left": "+=100px"
    }, 1000);
  });*/

  //Callback

  $(document).ready(function() {
  $("h1").click(function() {
    $("h2").animate({
      "font-size": "toggle",
      "width": "50%",
      "left": "+=100px"
    }, 1000, function() {
      $("h3").fadeOut(1000);
    });
  });
});
});*/