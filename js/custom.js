$(document).ready(function() {  
  
        $('#right_scroll img').click(function(){  
  
            var item_width = $('#carousel_ul li').outerWidth() + 10;  
  
            var left_indent = parseInt($('#carousel_ul').css('left')) - item_width;  
  
            $('#carousel_ul').animate({'left' : left_indent},{queue:false, duration:500},function(){  
  
                $('#carousel_ul li:last').after($('#carousel_ul li:first'));  
  
                $('#carousel_ul').css({'left' : '-210px'});

                if ($('#carousel_ul li')) === ($('#carousel_ul li:last-child')) {

                    console.log("test");
                };
            });  
        });  
  
        $('#left_scroll img').click(function(){  
  
            var item_width = $('#carousel_ul li').outerWidth() + 10;  
  
            var left_indent = parseInt($('#carousel_ul').css('left')) + item_width;  
  
            $('#carousel_ul').animate({'left' : left_indent},{queue:false, duration:500},function(){  
  
            $('#carousel_ul li:first').before($('#carousel_ul li:last'));  
  
            $('#carousel_ul').css({'left' : '-210px'});  
            });  
  
        });  
  });  