var minutes = 25;
var seconds = 0;
var clock;
var running = 0;
function back(){
  if(seconds == 0){ seconds = 59; minutes--; } else seconds--;
  $('#time').html( minutes+":"+seconds );
}

$(document).ready(start);

function start() {
  $('#clock').click(function(){
    if (!running){
      running = 1;
      clock = setInterval(back,1000);
    }
    else{
      running = 0;
      clearInterval(clock);
    }
  });

}
