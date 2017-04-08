//---------------------initializations for time----------------------------
var minutes = 25;
var breakMinutes = 5;
var seconds = 0;
var breakSeconds = 0;
//-------------------------------------------------------------------------
//---------------------DOM elements----------------------------------------
var clock_ = $('#clock') ;
var time_ = $('#time') ;
var fill_ = $('#fill') ;
//-------------------------------------------------------------------------
var clock;
var running = 0;
var breakRunning = 0;
var totalTime = minutes*60 + seconds;
var totalBreakTime = breakMinutes*60 + breakSeconds;
var totalTimeRemaining;
var totalTimeRemainingPercent = 0;

function breakBack(){
  if(breakSeconds == 0){ breakSeconds = 59; breakMinutes--; } else breakSeconds--;
  time_.html( breakMinutes+":"+breakSeconds );
  totalTimeRemaining = breakMinutes*60 + breakSeconds;
  totalTimeRemainingPercent = (totalTimeRemaining/totalBreakTime)*100;
  fill_.css("bottom", - totalTimeRemainingPercent+"%");
}

function back(){
  if(minutes == 0 && seconds == 0){ $('#clock>p').html("Break!"); minutes=$("#sessMinutes>#val").html(); $("#fill").css('background-color','#c54e4e'); breakRunning = 1; }
  if(breakMinutes == 0 && breakSeconds == 0){ $('#clock>p').html("Session"); breakMinutes=$("#breakMinutes>#val").html(); $("#fill").css('background-color','#88cc88'); breakRunning = 0; }
  if(breakRunning){
    breakBack();
    return;
  }
  if(seconds == 0){ seconds = 59; minutes--; } else seconds--;
  time_.html( minutes+":"+seconds );
  totalTimeRemaining = minutes*60 + seconds;
  totalTimeRemainingPercent = (totalTimeRemaining/totalTime)*100;
  $('#fill').css("bottom", - totalTimeRemainingPercent+"%");
}

function start() {
    MinutesgthEventsHandler();
  clock_.click(function(){
    if (!running){
      running = 1;
      if( ($('#sessMinutes>#val').html()) == (time_.html()) )
        totalTime = minutes*60 + seconds;
      if( ($('#breakMinutes>#val').html()) == (time_.html()) )
      totalBreakTime = breakMinutes*60 + breakSeconds;
      clock = setInterval(back,1000);
    }
    else{ running = 0; clearInterval(clock); }
  });
}

$(document).ready(function(){ // all variable initializations
  time_.html(minutes);
  $('#sessMinutes>#val').html(minutes);
  $('#breakMinutes>#val').html(breakMinutes);
  time_.html(minutes);
  start();
});

function MinutesgthEventsHandler(){ // + and - event handler
  $('#decreBreakMinutes').click(function(){ if(running) return;
      if(breakMinutes>1) --breakMinutes;
      $('#breakMinutes>#val').html( breakMinutes );
      breakSeconds = 0;
      if(breakRunning)
        time_.html(breakMinutes);
  });
  $('#increBreakMinutes').click(function(){ if(running) return;
        $('#breakMinutes>#val').html( ++breakMinutes );
        breakSeconds = 0;
        if(breakRunning)
        time_.html(breakMinutes);
  });

  $('#decreSessMinutes').click(function(){
    if(!running){
      if(!breakRunning){
        if(minutes>1)
          $('#sessMinutes>#val').html( --minutes );
        else minutes=1;
        seconds = 0;
        time_.html(minutes);
      }
      else{
        if(breakMinutes>1)
          $('#sessMinutes>#val').html( --breakMinutes );
        else breakMinutes=1;
        seconds = 0;
      }
    }

  });
  $('#increSessMinutes').click(function(){
    if(!running && !breakRunning){
      $('#sessMinutes>#val').html( ++minutes );
      seconds = 0;
      time_.html(minutes);
    }
    if(breakRunning)
      $('#sessMinutes>#val').html( ++minutes );
  });
}
