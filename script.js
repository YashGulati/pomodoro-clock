var breakLen = 0;
var sessLen = 0;
var debug = 0;
var minutes;
var seconds = 0;
var clock;
var running = 0;
var breakRunning = 0;
var breakMinutes = 5;
var breakSeconds = 0;
var totalTime = minutes*60 + seconds;
var totalTimeRemaining;
var totalTimeRemainingPercent = 0;
function back(){
  if(minutes == 0 && seconds == 0){ $('#clock>p').html("Break!"); breakRunning = 1; return; }
  if(seconds == 0){ seconds = 59; minutes--; } else seconds--;
  $('#debug').html( minutes+":"+seconds );
  $('#time').html( minutes+":"+seconds );
  totalTimeRemaining = minutes*60 + seconds;
  totalTimeRemainingPercent = (totalTimeRemaining/totalTime)*100;
  $('#fill').css("bottom", - totalTimeRemainingPercent+"%");
}

function start() {
  LengthEventsHandler();
  $('#clock').click(function(){
    if (!running){
      running = 1;
      clock = setInterval(back,1000);
    }
    else{ running = 0; clearInterval(clock); }
  });
}

$(document).ready(function(){
  minutes = ($('#sessLen>#val').html());
  $('#time').html(minutes);
  if(debug){
    $('#debug').css("display","block");
    $('#debug').html( minutes+":"+seconds );
  }
  start();
});

function LengthEventsHandler(){ // + and - event handler
  $('#decreBreakLen').click(function(){
    breakLen = $('#breakLen>#val').html();
    if(breakLen>1)
      $('#breakLen>#val').html( --breakLen );
  });
  $('#increBreakLen').click(function(){
    breakLen = parseInt ( $('#breakLen>#val').html() );
    if(breakLen>1)
      $('#breakLen>#val').html( ++breakLen );
  });

  $('#decreSessLen').click(function(){
    sessLen = $('#sessLen>#val').html();
    if(sessLen>1)
      $('#sessLen>#val').html( --sessLen );
    minutes = ($('#sessLen>#val').html());
    $('#time').html(minutes);
  });
  $('#increSessLen').click(function(){
    sessLen = parseInt ( $('#sessLen>#val').html() );
    if(sessLen>1)
      $('#sessLen>#val').html( ++sessLen );
    minutes = ($('#sessLen>#val').html());
    $('#time').html(minutes);
  });
}
