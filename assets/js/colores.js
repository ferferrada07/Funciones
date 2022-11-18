'use strict';
var color = ""

document.addEventListener('keydown', function (event) { 
if (event.key === 'a') {
    color = "green"
}else if(event.key=== 's'){
    color = "red"
}else if(event.key==='d'){
    color = "blue"
}  })


document.querySelectorAll('.divs').forEach(function(el){
    el.addEventListener('click', function() {
      el.style.backgroundColor= color;
    });
  });

