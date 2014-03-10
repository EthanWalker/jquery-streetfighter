$(document).ready(function() {
  var coolActive = false,
      readyActive = false;

  $('.ryu').mouseenter(function() {
    readyActive = true;
  	if(coolActive == false){	
      $('.animation').hide();
      $('.ryu-ready').show();
    }
  })
  .mouseleave(function() {
    readyActive = false;
  	if(coolActive == false){
      $('.animation').hide();
      $('.ryu-still').show();
    }
  })
  .mousedown(function() {
    playHadouken();  
    $('.animation').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
    );
  })
  .mouseup(function() {
  	if(coolActive){
      $('.animation').hide();
      $('.ryu-cool').show();
    }
    else{
      $('.animation').hide();
      $('.ryu-ready').show();
    }
  });


  $("html").keydown( function(e) {
  	if( e.which == 88) {
  	  coolActive = true;
      $('.animation').hide();
   	  $('.ryu-cool').show();
    }
  });

  $("html").keyup( function(e) {
  	if( e.which == 88) {
      $('.animation').hide();
  	  coolActive = false;
      if(readyActive) {
        $('.ryu-ready').show();
      } else {
        $('.ryu-still').show();
      }
    }
  });

  // Abstracted state functions/tracking
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

