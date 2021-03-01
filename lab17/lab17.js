// line 3 tells the browser to wait unti all html, css has unloaded
// before running the js file
$(document).ready(function(){
  // when reduce button is clicked, the div box will reduce
  $("#reduce").click(function(){
    $(".box").animate({
      height: '-=50px',
      width: '-=50px'
    });
  });
  // when enlarge button is clicked, the div box will enlarge
  $("#enlarge").click(function(){
    $(".box").animate({
      height: '+=50px',
      width: '+=50px'
    });
  });
  // when decOpacity button is clicked, the opacity of div box will decrease
  $("#decOpacity").click(function(){
    $(".box").animate({
      opacity: '-=0.2'
    }, 5000);
  });
  // when incOpacity button is clicked, the opacity of div box will increase
  $("#incOpacity").click(function(){
    $(".box").animate({
      opacity: '+=0.2'
    }, 5000);
  });
  // when right button is clicked, the div box will move to the right
  $("#right").click(function(){
    $(".box").animate({
      left: '+=30px'
    });
  });
  // when left button is clicked, the div box will move to the left
  $("#left").click(function(){
    $(".box").animate({
      left: '-=30px'
    });
  });
  // when down button is clicked, the div box will move down
  $("#down").click(function(){
    $(".box").animate({
      top: '+=30px'
    });
  });
  // when up button is clicked, the div box will move up
  $("#up").click(function(){
    $(".box").animate({
      top: '-=30px'
    });
  });
  // when circle button is clicked, the div box will move up turn into a circle
  $("#circle").click(function(){
    $(".box").animate({
      'border-radius': '100%'
    }, 5000);
  });
  // when square button is clicked, the div box will move up turn into a square
  $("#square").click(function(){
    $(".box").animate({
      'border-radius': '0%'
    }, 5000);
  });
  // when slide button is clicked, the div box will slide to the right and
  // then slide back to the left. Opacity of the box will decrease while sliding
  // right and increase while sliding left
  $("#slide").click(function(){
    $(".box").animate({
      left: '+=500px',
      opacity: '-=0.8',
    }, "slow");
    $(".box").animate({
      left: '-=500px',
      opacity: '+=0.8',
    }, "slow");
  });

});
