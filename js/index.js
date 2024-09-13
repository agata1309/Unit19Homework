$(" .inline-block").hover(function(e) { 
      $(this).css("background-color",e.type === "mouseenter"?"lightgrey":"transparent") 
 })

console.log("Your index.js file is loaded corectly")



 
$( "li.fade" ).hover(function() {
  $( this ).fadeOut( 100 );
  $( this ).fadeIn( 500);
});

$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "white");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "cornsilk");
    }  
  });
});

$(document).ready(function(){
  // Function to animate the image
  function animateImage() {
      $('#logo').animate({
          left: '+=30',    // Move right by 30px
          top: '+=15',     // Move down by 15px
          width: '+=10'    // Increase the width by 10px
      }, 1000, function() {
          // Reverse the animation to create a continuous gentle movement
          $('#logo').animate({
              left: '-=30',
              top: '-=15',
              width: '-=10'
          }, 1000);
      });
  }