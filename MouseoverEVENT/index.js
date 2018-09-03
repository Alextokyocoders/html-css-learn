document.addEventListener('DOMContentLoaded', function(){
    var button = document.querySelector(".page-title");

    button.addEventListener('mouseover', function(e){
        e.target.style.color = "red";
  });
    button.addEventListener('mouseout', function(e){
        e.target.style.color = "black";
  });
        
}, false);