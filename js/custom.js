$(document).ready(function() {  
  var $carousel_ul = $('#carousel_ul'), // $(this)
      $items = $carousel_ul.find('li'),
      item_width = $items.outerWidth() + 10,
      index = 0;

  $('#right_scroll img').click(function(){  
    var carousel_css_left = parseInt($carousel_ul.css('left'));
    var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
    var left_indent = carousel_left - item_width;  
    console.log(carousel_css_left);

    if ( index < $items.length -1) {
      $carousel_ul.animate({'left' : left_indent}, 500);  
      index += 1;
    } else {
      // loop code
    }
  });  

  $('#left_scroll img').click(function(){  
    var carousel_css_left = parseInt($carousel_ul.css('left'));
    var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
    var left_indent = carousel_left + item_width;  
    
    if (index > 0) {
      $carousel_ul.animate({'left' : left_indent}, 500);  
      index -= 1;
    } else {
      // loop code
    }

  });  
});  
