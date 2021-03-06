var now = new Date();
var hour = now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
if(hour <= 10 && minute <= 0 && second <= 0){window.location.href='SohrabHura.html';}
else if(hour >= 10 && minute >= 0 && second >= 0){window.location.href='DavidAlekhuogie.html';}
function refreshAt(hours, minutes, seconds) {
    var now = new Date();
    var then = new Date();

    if(now.getHours() > hours ||
       (now.getHours() == hours && now.getMinutes() > minutes) ||
        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
        then.setDate(now.getDate() + 1);
    }
    then.setHours(hours);
    then.setMinutes(minutes);
    then.setSeconds(seconds);

    var timeout = (then.getTime() - now.getTime());
    setTimeout(function() { window.location.reload(true); }, timeout);
}
refreshAt(10,0,0); //Will refresh the page at 10:00am



//for image link only 
$(document).ready(function(){
  $("h1").hover(function(){
    $(".y2021").css("color", "#A00000");
    }, function(){
    $(".y2021").css("color", "black");
  });

  var h1 = document.getElementById('time');

  function time() {
  var d = new Date();
  var s = d.getSeconds();
  var m = d.getMinutes();
  var h = d.getHours();
  h1.textContent = 
    ("0" + h).substr(-2) + ":" + ("0" + m).substr(-2) + ":" + ("0" + s).substr(-2);}
  setInterval(time, 1000);

  $(".y2021").hover(function(){
    $(this).css("color", "black");
    }, function(){
    $(this).css("color", "black");
  });

  $( ".MA").hover(function() {
    $(".MA1").css("display","inline-block");
    }, function(){
    $(".MA1").css("display","none");
  });

  $( ".SH").hover(function() {
    $(".SH1").css("display","inline-block");
    }, function(){
    $(".SH1").css("display","none");
  });

  $(".DA").hover(function() {
    $(".DA1").css("display","inline-block");
    }, function(){
    $(".DA1").css("display","none");
  });

  $(".OA").hover(function() {
    $(".OA1").css("display","inline-block");
    }, function(){
    $(".OA1").css("display","none");
  });

  $(".ZJM").hover(function() {
    $(".ZJM1").css("display","inline-block");
    }, function(){
    $(".ZJM1").css("display","none");
  });

  $(".IR").hover(function() {
    $(".IR1").css("display","inline-block");
    }, function(){
    $(".IR1").css("display","none");
  });

  $(".IB").hover(function() {
    $(".IB1").css("display","inline-block");
    }, function(){
    $(".IB1").css("display","none");
  });

  $(".DL" ).hover(function() {
    $(".DL1").css("display","inline-block");
    }, function(){
    $(".DL1").css("display","none");
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
    $(".imgblank1").css("display","block");
    $(".imgblank2").css("display","block");
    $(".enlarge").css("display","none");
    $(".button").css("display","none");
    $(".img1").css("height","200px");
    $(".img2").css("height","200px");
    $(".img3").css("height","200px");
    $(".img4").css("height","200px");
    $(".img5").css("height","200px");
    $(".img6").css("height","200px");
    $(".img7").css("height","200px");
    $(".img8").css("height","200px");
    $(".img9").css("height","200px");
    $(".img1").css("display","block");
    $(".img2").css("display","block");
    $(".img3").css("display","block");
    $(".img4").css("display","block");
    $(".img5").css("display","block");
    $(".img6").css("display","block");
    $(".img7").css("display","block");
    $(".img8").css("display","block");
    $(".img9").css("display","block");
    $(".img1intro").css("display","none");
    $(".img2intro").css("display","none");
    $(".img3intro").css("display","none");
    $(".img4intro").css("display","none");
    $(".img5intro").css("display","none");
    $(".img6intro").css("display","none");
    $(".img7intro").css("display","none");
    $(".img8intro").css("display","none");
    $(".img9intro").css("display","none");
  });

    $( ".img1" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img1").css("height","540px");
    $(".img1").css("margin","0 0px");
    $(".img1intro").css("display","block");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".img2" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img2").css("height","540px");
    $(".img2").css("margin","0 0px");
    $(".img2intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img3" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img3").css("height","540px");
    $(".img3").css("margin","0 0px");
    $(".img3intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img4" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img4").css("height","540px");
    $(".img4").css("margin","0 0px");
    $(".img4intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img5" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img5").css("height","540px");
    $(".img5").css("margin","0 0px");
    $(".img5intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img2").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img6" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img6").css("height","540px");
    $(".img6").css("margin","0 0px");
    $(".img6intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img2").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img7" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img7").css("height","540px");
    $(".img7").css("margin","0 0px");
    $(".img7intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img2").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img8" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img8").css("height","540px");
    $(".img8").css("margin","0 0px");
    $(".img8intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img2").css("display","none");
    $(".img9").css("display","none");
  });

    $(".img9" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img9").css("height","540px");
    $(".img9").css("margin","0 0px");
    $(".img9intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img2").css("display","none");
  });

  $( ".left2" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img1").css("display","block");
    $(".img1").css("height","540px");
    $(".img1").css("margin","0 0px");
    $(".img2intro").css("display","none");
    $(".img1intro").css("display","block");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

  $( ".right1" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img2").css("display","block");
    $(".img2").css("height","540px");
    $(".img2").css("margin","0 0px");
    $(".img1intro").css("display","none");
    $(".img2intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

  $( ".left3" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img2").css("display","block");
    $(".img2").css("height","540px");
    $(".img2").css("margin","0 0px");
    $(".img3intro").css("display","none");
    $(".img2intro").css("display","block");
    $(".img1").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".right2" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img3").css("display","block");
    $(".img3").css("height","540px");
    $(".img3").css("margin","0 0px");
    $(".img2intro").css("display","none");
    $(".img3intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".left4" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img3").css("display","block");
    $(".img3").css("height","540px");
    $(".img3").css("margin","0 0px");
    $(".img4intro").css("display","none");
    $(".img3intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".right3" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img4").css("display","block");
    $(".img4").css("height","540px");
    $(".img4").css("margin","0 0px");
    $(".img3intro").css("display","none");
    $(".img4intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".left5" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img4").css("display","block");
    $(".img4").css("height","540px");
    $(".img4").css("margin","0 0px");
    $(".img5intro").css("display","none");
    $(".img4intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".right4" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img5").css("display","block");
    $(".img5").css("height","540px");
    $(".img5").css("margin","0 0px");
    $(".img4intro").css("display","none");
    $(".img5intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".left6" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img5").css("display","block");
    $(".img5").css("height","540px");
    $(".img5").css("margin","0 0px");
    $(".img6intro").css("display","none");
    $(".img5intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".right5" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img6").css("display","block");
    $(".img6").css("height","540px");
    $(".img6").css("margin","0 0px");
    $(".img5intro").css("display","none");
    $(".img6intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".left7" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img6").css("display","block");
    $(".img6").css("height","540px");
    $(".img6").css("margin","0 0px");
    $(".img7intro").css("display","none");
    $(".img6intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });


    $( ".right6" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img7").css("display","block");
    $(".img7").css("height","540px");
    $(".img7").css("margin","0 0px");
    $(".img6intro").css("display","none");
    $(".img7intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".left8" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img7").css("display","block");
    $(".img7").css("height","540px");
    $(".img7").css("margin","0 0px");
    $(".img8intro").css("display","none");
    $(".img7intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img8").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".right7" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img8").css("display","block");
    $(".img8").css("height","540px");
    $(".img8").css("margin","0 0px");
    $(".img7intro").css("display","none");
    $(".img8intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img9").css("display","none");
  });

$( ".left9" ).click(function() {
  $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img8").css("display","block");
    $(".img8").css("height","540px");
    $(".img8").css("margin","0 0px");
    $(".img9intro").css("display","none");
    $(".img8intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img9").css("display","none");
  });

    $( ".right8" ).click(function() {
    $(".imgblank1").css("display","none");
    $(".imgblank2").css("display","none");
    $(".enlarge").css("display","block");
    $(".button").css("display","block");
    $(".img9").css("display","block");
    $(".img9").css("height","540px");
    $(".img9").css("margin","0 0px");
    $(".img8intro").css("display","none");
    $(".img9intro").css("display","block");
    $(".img1").css("display","none");
    $(".img2").css("display","none");
    $(".img3").css("display","none");
    $(".img4").css("display","none");
    $(".img5").css("display","none");
    $(".img6").css("display","none");
    $(".img7").css("display","none");
    $(".img8").css("display","none");
  });

});
