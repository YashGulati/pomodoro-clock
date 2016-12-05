//---------------------initializations for time----------------------------
var minutes = 25;
var breakMinutes = 5;
//------------------------------------------------------------------------------------
var seconds = 0;
var breakSeconds = 0;
var sessMinutes = 0;
var debug = 0;
var clock;
var running = 0;
var breakRunning = 0;
var totalTime; // initialized when clock is clicked
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
    MinutesgthEventsHandler();
  $('#clock').click(function(){
    if (!running){
      running = 1;
      if( ($('#sessMinutes').html()) == ($('#time').html()) )
        totalTime = minutes*60 + seconds;
      clock = setInterval(back,1000);
    }
    else{ running = 0; clearInterval(clock); }
  });
}

$(document).ready(function(){ // all variable initializations
  $('#time').html(minutes);

  breakMinutes = ($('#sessMinutes>#val').html());
  $('#time').html(minutes);

  if(debug){
    $('#debug').css("display","block");
    $('#debug').html( minutes+":"+seconds );
  }
  start();
});

function MinutesgthEventsHandler(){ // + and - event handler
  $('#decreBreakMinutes').click(function(){
    if(!running){
      breakMinutes = $('#breakMinutes>#val').html();
      if(breakMinutes>1)
        $('#breakMinutes>#val').html( --breakMinutes );
    }
  });
  $('#increBreakMinutes').click(function(){
    if(!running){
      breakMinutes = parseInt ( $('#breakMinutes>#val').html() );
      if(breakMinutes>1)
        $('#breakMinutes>#val').html( ++breakMinutes );
    }
  });

  $('#decreSessMinutes').click(function(){
    if(!running){
      sessMinutes = $('#sessMinutes>#val').html();
      if(sessMinutes>1)
        $('#sessMinutes>#val').html( --sessMinutes );
      minutes = ($('#sessMinutes>#val').html());
      $('#time').html(minutes);
    }
  });
  $('#increSessMinutes').click(function(){
    if(!running){
      sessMinutes = parseInt ( $('#sessMinutes>#val').html() );
      if(sessMinutes>1)
        $('#sessMinutes>#val').html( ++sessMinutes );
      minutes = ($('#sessMinutes>#val').html());
      $('#time').html(minutes);
    }
  });
}
