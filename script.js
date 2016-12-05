var debug = 1;
var minutes = 1;
var seconds = 0;
var clock;
var running = 0;
var totalTime = minutes*60 + seconds;
var totalTimeRemaining;
var totalTimeRemainingPercent = 0;
function back(){
  if(seconds == 0){ seconds = 59; minutes--; } else seconds--;
  $('#debug').html( minutes+":"+seconds );
  $('#time').html( minutes+":"+seconds );
  totalTimeRemaining = minutes*60 + seconds;
  totalTimeRemainingPercent = (totalTimeRemaining/totalTime)*100;
  $('#fill').css("bottom", - totalTimeRemainingPercent+"%");
}

function start() {

  if(debug){
    $('#debug').css("background-color","#887766");
    $('#debug').html( minutes+":"+seconds );
  }
  $('#clock').click(function(){
    if (!running){
      running = 1;
      clock = setInterval(back,1000);
    }
    else{ running = 0; clearInterval(clock); }
  });
}

$(document).ready(start);
