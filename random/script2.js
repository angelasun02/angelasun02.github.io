var t1 = ['giraffe', 'turtle', 'human'];
var t2 = ['blue', 'silly', 'deeply wise'];
var t3 = ['monkey', 'fruit', 'banana'];

function make_random_sentence()
{
  let t1 = t1[Math.floor(Math.random() * t1.length)];
  let t2 = t2[Math.floor(Math.random() * t2.length)];
  let t3 = t3[Math.floor(Math.random() * t3.length)];

  let t1_slot = $('.t1-slot');
  let t2_slot = $('.t2-slot');
  let t3_slot = $('.t3-slot');

  t1_slot.text(t1);
  t2_slot.text(t2);
  t3_slot.text(t3);
}

$(document).ready(function() {
  make_random_sentence();

  $('button').on('click', function() {
    make_random_sentence();
  });
});
