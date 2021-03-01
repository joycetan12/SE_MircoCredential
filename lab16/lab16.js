// line 3 tells the browser to wait unti all html, css has unloaded
// before running the js file
$(document).ready(function(){
  // when hide button is clicked, column 1 paragraph and hide button
  // will disappear and show button will appear
  $(".btnHide").click(function(){
    $(".column1 p").toggle();
    $(".btnHide").hide();
    $(".btnShow").show();
  });
  // when show button is clicked, column 1 paragraph and hide button
  // will appear and show button will disappear
  $(".btnShow").click(function(){
    $(".column1 p").toggle();
    $(".btnShow").hide();
    $(".btnHide").show();
  });
  // when hovering over paragraph in column 2, the paragraph will be hidden
  // and another paragraph will display after
  $(".column2 p").hover(function(){
    $(".column2 p").hide(1000, function(){
      $(".column2 p").replaceWith("<p class='pHover'>Ohh no you deleted everything!!!<p>");
    });
  });
  // when enlarge button is clicked, the div box will enlarge
  $(".btnEnlarge").click(function(){
    $(".box").animate({
      height: '+=50px',
      width: '+=50px'
    });
  });

});
