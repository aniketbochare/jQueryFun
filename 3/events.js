//1 Click
/*
$(document).ready(function() {
						   
  $("h1").click(function() {
    $(this).css("background-color","green");
  });
  
});*/

//Mouse down
/*
$(document).ready(function() {
						   
  $("h1").mousedown(function() {
    $(this).css("background-color","green");
  });
  
});
*/
//Mouse Up and mouse down

/*
$(document).ready(function() {
						   
  $("h1").mousedown(function() {
    $(this).css("background-color","red");
  });
  $("h1").mouseup(function() {
    $(this).css("background-color","yellow");
  });
  
});*/

//Mouse enter and leave
/*
$(document).ready(function() {
						   
  $("h1").mouseenter(function() {
    $(this).css("background-color","red");
  });
  $("h1").mouseleave(function() {
    $(this).css("background-color","yellow");
  });
  
}); */

//Unbind some
/*
$(document).ready(function() {
						   
  $("h1").mouseenter(function() {
    $(this).css("background-color","red");
  });
  $("h1").mouseleave(function() {
    $(this).css("background-color","yellow");
    $(this).unbind();
  });
  
});*/
/*
$(document).ready(function() {
						   
  $("h1").mouseenter(function() {
    $(this).css("background-color","red");
  });
  $("h1").mouseleave(function() {
    $(this).css("background-color","yellow");
    $("*").unbind("mouseleave");
  });
  
});*/