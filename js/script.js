$(document).ready(function(){
  
//EFFETTO HOVER SU LINK
$("li a")
.mouseover(function(){
    $(this).css("color", "rgb(25, 28, 31)");
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

  //EFFETTO dropdown
  $('.parent-dropdown')
  .mouseover(function() {
    $(this).css("color", "rgb(25, 28, 31)");
    $(this).children('.dropdown').toggle();
  })
  .mouseout(function(){
      $(this).css("color", "rgb(139, 149, 158)");
  });


  //sipario dropdown responsive
  $('#open')
  .click(function() {
    $('.hamburger-menu').addClass("visible");
    $('fa-times').addClass("visible");
  })

  $("#close").click (function (){
    $(".hamburger-menu").removeClass("visible") ;
    $('fa-times').removeClass("visible");

});

  $('.parent-sipario')
  .click(function() {
    $(this).children('.sipario').toggle();
  })
});
