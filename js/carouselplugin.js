(function($){
    $.fn.carouselplugin = function(options){
      var $element = $(this),  
          $items = $element.find('li'),
          item_width = $items.outerWidth() + 10,
          index = 0,
          settings = $.extend({
            cssPrefix: 'da_'
          }, options);

console.log(index);

      init = function () { 
        // TODO: prefix all class names, e.g. 'da_'
        $carouselContainer = $('<div class="carousel_container"></div>');
        $element.wrap('<div class="carousel_inner" />');

        $('.carousel_inner').css({"float":"left","width":"400px","overflow":"hidden","height":"300px"}).wrap($carouselContainer);
        $( ".carousel_container" ).prepend( '<div class="left_scroll"></div>' ).append( '<div class="right_scroll"></div>' );
        $(".left_scroll").append("<img src='pics/left.jpg' />").css({"float":"left","height":"10px","width":"15px","position":"relative","margin-top":"140px","margin-right":"7px"});;
        $(".right_scroll").append("<img src='pics/right.jpg' />").css({"float":"left","height":"10px","width":"15px","position":"relative","margin-top":"140px"});
        $(".carousel_ul").css({"position":"relative","list-style-type":"none","margin-top":"0px","padding":"0px","width":"9999px","padding-bottom":"10px"});
        // TODO: store arbitrary values in settings (e.g. 140px)
        $(".carousel_ul li").css({"float":"left","margin-left":"7px","width":"400px","padding":"0px","height":"110px","background":"#000000","margin-top":"10px","margin-bottom":"10px"});
    
   
    $('.right_scroll img').click(function(){  
      var carousel_css_left = parseInt($element.css('left'));
      var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
      var left_indent = carousel_left - item_width;
      // console.log($element);

   
      if ( index < $items.length -1) {
        $element.animate({'left' : left_indent}, 500);  
        index += 1;
      } else {
       var carousel_css_left = parseInt($element.css('left'));
      var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
      var left_indent = carousel_left + item_width*5;
      $element.animate({'left' : left_indent}, 500);  
      index += 1;
      }
    });  

    $('.left_scroll img').click(function(){  
      var carousel_css_left = parseInt($element.css('left'));
      var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
      var left_indent = carousel_left + item_width;  
      
      if (index > 0) {
        $element.animate({'left' : left_indent}, 500);  
        index -= 1;
      } else {
      var carousel_css_left = parseInt($element.css('left'));
      var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
      var left_indent = carousel_left - item_width*5;
      $element.animate({'left' : left_indent}, 500);  
      index += 1;
      }
    }); 
    

  };

      // next = function () {}
      // previous = function () {}

    init();
  }; 

})(jQuery);
