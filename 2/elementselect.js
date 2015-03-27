// 1 Para selector
/*$(document).ready(function() {
  $("#testbutton").click(function() {
    $("p").css("background-color","red");	
  });
});
*/

//2 Div selector
/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div").css("background-color","red");	
  });
});
*/

//3 Multiple selector
/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div, strong, #testbutton").css("background-color","red");	
  });
});
*/

//4 All selector
/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $("*").css("background-color","red");	
  });
});
*/

//5 Parent child

/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div > p").css("background-color","red");	
  });
});
*/

//6 First child Selector

/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div > p:first-child").css("background-color","red");	
  });
});
*/

// 7 Descendant Selector

/*

$(document).ready(function() {
  $("#testbutton").click(function() {
    $("div strong").css("background-color","red");	
  });
});
*/

// 8 Odd Selector
/*$(document).ready(function() {
  $("#testbutton").click(function() {
    $("p:odd").css("background-color","red");	
  });
});*/

//9 ID selector
/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $("#third").css("background-color","red");	
  });
});
*/
/*
$(document).ready(function() {
  $("#testbutton").click(function() {
    $(".multiple").css("background-color","red");	
  });
});*/

$(document).ready(function() {
  $("#testbutton, strong").click(function() {
    $(this).css("background-color","red");	
  });
});

