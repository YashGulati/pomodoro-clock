
minutes = 25;
seconds = 0;
function back(){
  if(seconds == 0){ seconds = 59; minutes--; } else seconds--;
  $('#time').html( minutes+":"+seconds );

}

$(document).ready(start);

function start() {
    $('#clock').click(function(){
      setInterval(back,1000);
    });

}
