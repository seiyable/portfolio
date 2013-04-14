var timerId;
var isRotating = false;

$(document).ready(function(){  
  $("img.ic-head").rotate({ 
     bind: 
       { 
          mouseover : function() { 
            isRotating = true;
            rotateIcon();
          },
          mouseout : function() { 
              isRotating = false;
              if(timerId){ clearTimeout(timerId); timerId = null;};
          }
       } 
  });
});

var angle = 0;
function rotateIcon(){
  angle += 60;
  $("img.ic-head").rotate({animateTo:angle, duration:350, callback:function(){
    if(isRotating){timerId = setTimeout(rotateIcon, 0);};
  }
 }); 
}