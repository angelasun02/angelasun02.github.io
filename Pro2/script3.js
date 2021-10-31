//for image link only 
$(document).ready(function(){
  $("h1").hover(function(){
    $(".y2021").css("color", "#A00000");
    }, function(){
    $(".y2021").css("color", "black");
  });

  $(".y2021").hover(function(){
    $(this).css("color", "black");
    }, function(){
    $(this).css("color", "black");
  });


  $( "img" ).click(function() {
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $("img").css("width","60vw");
    $("img").css("margin-left","20vw");
    $("img").css("margin-top","-35px");
  });

  $( ".button" ).hover(function() {
    $(".line1").css("transform","rotate(0deg)");
    $(".line2").css("transform","rotate(0deg)");
    $(".line1").css("margin-top","21px");
    $(".line2").css("margin-top","29px");
    }, function(){
    $(".line1").css("transform","rotate(30deg)");
    $(".line2").css("transform","rotate(-30deg)");
    $(".line1").css("margin-top","25px");
    $(".line2").css("margin-top","25px");
  });

  $( ".button" ).click(function() {
    $(".enlarge").css("display","none");
    $(".button").css("display","none");
    $("img").css("width","720px");
    $("img").css("margin-left","45vw");
    $("img").css("margin-top","5px");
  });
});
