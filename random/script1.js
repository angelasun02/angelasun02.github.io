console.log('working.');
var t1 = ["one","two","three"];
var t2 = ["monkey","fish","cat"];
var t3 = ["water","earth","word"];
var button = document.querySelector("button");


// console.log(Math.floor(Math.random() * t1.length));

var i = Math.floor(Math.random() * t1.length);

console.log(t1[i]);

$(document).ready(function(){
var t1_element = $('.t1');
var t2_element = $('.t2');
var t3_element = $('.t3');
var random_t1 = t1[Math.floor(Math.random() * t1.length)];
var random_t2 = t2[Math.floor(Math.random() * t2.length)];
var random_t3 = t3[Math.floor(Math.random() * t3.length)];
t1_element.text(random_t1);
t2_element.text(random_t2);
t3_element.text(random_t3);

$('button').click(function(){
    console.log('clicked');
});
});


