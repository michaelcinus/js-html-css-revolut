//EFFETTO HOVER SU LINK
$("li a")
.mouseover(function(){
    $(this).css("color", "rgb(25, 28, 31)").toggle;
  })
  .mouseout(function(){
    $(this).css("color", "rgb(139, 149, 158)");
  });

  //EFFETTO HOVER SU BOTTONE
  $("#button")
.mouseover(function(){
    $(this).css("opacity", "0.7");
  })
  .mouseout(function(){
    $(this).css("opacity", "1");
  });