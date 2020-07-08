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

  $("#footer-button")
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
    $(this).css("cursor", "pointer");
    $(this).children('.dropdown').show();
  })
  .mouseout(function(){
      $(this).css("color", "rgb(139, 149, 158)");
      $(this).children('.dropdown').hide();
  });


  //sipario dropdown responsive
  $('#open')
  .click(function() {
    $('.hamburger-menu').addClass("visible");
  })
  .mouseover(function(){
    $(this).css("cursor", "pointer");
  })

  $("#close").click (function (){
    $(".hamburger-menu").removeClass("visible") ;
  })
  .mouseover(function(){
    $(this).css("cursor", "pointer");
  });

  $(".titolo-sipario")
  .mouseover(function(){
      $(this).css("color", "rgb(25, 28, 31)");
      $(this).css("cursor", "pointer");
    })
    .mouseout(function(){
      $(this).css("color", "rgb(139, 149, 158)");
      $(this).css("cursor", "pointer");
    });

  $('.parent-sipario')
  .click(function() {
    $(this).children('.sipario').toggle(500);
  })
});
