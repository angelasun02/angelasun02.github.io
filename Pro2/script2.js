$(document).ready(function(){
  $("a").hover(function(){
    $(".h2021").css("display", "block");
    }, function(){
    $(".h2021").css("display", "block");
  });
});

$(document).ready(function(){
  $("a").hover(function(){
    $("a").css("font-weight","400");
    $("a").css("color","#A00000");
    $("a").css("opacity","0.8");
    }, function(){
    $("a").css("font-weight","400");
    $("a").css("color","#A00000");
    $("a").css("opacity","0.8");
  });

  window.setInterval(function(){ //This will trigger every X miliseconds

    var date = new Date(); //Creates a date that is set to the actual date and time
    var hours = date.getHours(); //Get that date hours (from 0 to 23)
    var minutes = date.getMinutes(); //Get that date minutes (from 0 to 59) 

   if (hours = 8 && minutes == 30 ){
       window.location.href = "https://angelasun02.github.io/Pro2/MariaAntelman.html";

   } else if( hour = 9 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/SohrabHura.html";
   } else if( hour = 10 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/DavidAlekhuogie.html";
   } else if( hour = 11 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/Break.html";
   } else if( hour = 13 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/ÖzlemAltın.html";
   } else if( hour = 14 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/ZoraJMurff.html";
   } else if( hour = 15 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/IrinaRozovsky.html";
   } else if( hour = 16 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/IñakiBonillas.html";
   } else if( hour = 17 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/DionneLee.html";
   } else if( hour = 18 && minutes == 30){
       window.location.href = "https://angelasun02.github.io/Pro2/Break.html";
   } 

}, 1000);

});
