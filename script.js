            $(document).ready(function(){
                $( "h2" ).click(function() {
                    $("body").toggleClass('on');
                    $( "h2" ).hover(function() {
                    $("body").toggleClass('on');
                });

               /*if($('body').hasClass('.a') ) {
                    this.removeClass('.a, .b, .c');
                    this.addClass('.b');
                }；*/
                //state A(.a), state B(.b), state C(.c)
                // if body has a class .a, if I click h2, I want:
                // - body.removeClass('.a, .b, .c');
                // -body.addClass('.b');
                // if body has a class .b, if I click h2, I want:
                // - remove all classes like above^
                // -body.addClass('.c');

                });
