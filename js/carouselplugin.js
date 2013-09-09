(function($){
    $.fn.carouselplugin = function(options){
      var $element = $(this),  
          $items = $element.find('li'),
          index = 0,
          container_number = 0,
          $carousel_inner,
          $left_scroll,
          $right_scroll,
          settings = $.extend({
            cssPrefix : 'da_',
            keypress: true,
          }, options);

      init = function () { 
        setupStructure();
        setupStyling();
        // setupNumbering();
        $('.right_scroll').click(function(){  
          next();
        });  

        console.log($items);

        $('.left_scroll').click(function(){  
          previous();
        });
      
        
        return this;
      },

      //  setupNumbering = function (container_number) {
      //   $( "ul[class~='da_']" );
      //   if ("" > 0) {
      //     "" += 1;
      //   } else {
      //     return container_number;
      //   }
      // };

      setupStructure = function () {
        $element.wrap('<div class="carousel_inner" />');
        $carousel_inner = $('.carousel_inner'); 
        

        $carousel_inner.wrap('<div class="' + settings.cssPrefix + 'carousel_container"></div>');

        $('.' + settings.cssPrefix + 'carousel_container').prepend( '<div class="left_scroll"></div>' ).append( '<div class="right_scroll"></div>' );
        $left_scroll = $('.left_scroll');
        $right_scroll =$('.right_scroll');

        $left_scroll.append('<img src="pics/left.jpg" />');
        $right_scroll.append('<img src="pics/right.jpg" />');
      },

      setupStyling = function () {
        $carousel_inner.css({'float':'left','width':'400px','overflow':'hidden','height':'300px'});
        
        $left_scroll.css({'float':'left','height':'10px','width':'15px','position':'relative','margin-top':'140px','margin-right':'7px'});
        $right_scroll.css({'float':'left','height':'10px','width':'15px','position':'relative','margin-top':'140px'});
        $element.css({'position':'relative','list-style-type':'none','margin-top':'0px','padding':'0px','width':'9999px','padding-bottom':'10px', 'left': '0px'});
        $items.css({'float':'left','margin-left':'7px','padding':'0px','background':'#000000','margin-top':'10px','margin-bottom':'10px'});
      },

      next = function () {
        var item_width = parseInt($($items[0]).outerWidth(), 10);
        var carousel_left = parseInt($element.css('left'), 10);
        var left_indent = carousel_left - (item_width + 10);
     
        if ( index < $items.length -1) {
          $element.animate({'left' : left_indent}, 500);  
          index += 1;
        } else {
          // $(items li:first-child).clone().appendTo$(items);
        }
      }, 
      previous = function () {
        var item_width = parseInt($($items[0]).outerWidth(), 10);
        var carousel_left = parseInt($element.css('left'), 10);
        var left_indent = carousel_left + (item_width + 10);  
        
        if (index > 0) {
          $element.animate({'left' : left_indent}, 500);  
          index -= 1;
        } else {
          return false;
        }
      };


    init();

  }; 

})(jQuery);
