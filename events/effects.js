//Hide effect

/* $(document).ready(function() {
  $("h1").click(function() {
    $("h2").hide(1000);
  });
}); */

//Show
/* $(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").show(1000);
  });
}); */

//Toggle
/*
$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").toggle(1000);
  });
});*/

//Slide Up
/*
$(document).ready(function() {
  //$("h2").hide();
  
  $("h1").click(function() {
    $("h2").slideUp(1000);
  });
});*/

//Slide down up toggle
/*
$(document).ready(function() {
  $("h2").hide();
  
  $("h1").click(function() {
    $("h2").slideToggle(1000);
  });
});*/

//Fade
/*
$(document).ready(function() {
  //$("h2").hide();
  
  $("h1").click(function() {
    $("h2").fadeOut(1000);
  });
});*/

//Fade out and toggles exist

//Fade to 0.3 alpha
/*
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").fadeTo(1000, 0.3);
  });
});
*/
/*
//Fade and toggle
$(document).ready(function() {
  $("h1").click(function() {
    $("h2").delay(2000).fadeToggle(1000);
  });
});*/

//Callback very imp inside closure.

$(document).ready(function() {
  $("h1").click(function() {
    $("h2").hide(1000, function() {
      $("h3").fadeOut(1000);
    });
  });
});
