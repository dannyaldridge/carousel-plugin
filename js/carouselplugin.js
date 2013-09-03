(function($){
    $.fn.carouselplugin = function(){
      console.log($(this));
      var init = function () {
      $('#carousel_ul').wrap('<div id="carousel_inner" />');
      $('#carousel_inner').wrap('<div id="carousel_container" />');
      $( "#carousel_container" ).prepend( "<div id='left_scroll'></div>" );
      $( "#carousel_container" ).append( "<div id='right_scroll'></div>" );
      $("#left_scroll").append("<img src='pics/left.jpg' />");
      $("#right_scroll").append("<img src='pics/right.jpg' />");
      $("#carousel_inner").css({"float":"left","width":"400px","overflow":"hidden","height":"300px"});
      $("#carousel_ul").css({"position":"relative","list-style-type":"none","margin-top":"0px","padding":"0px","width":"9999px","padding-bottom":"10px"});
      $("#carousel_ul li").css({"float":"left","margin-left":"7px","width":"400px","padding":"0px","height":"110px","background":"#000000","margin-top":"10px","margin-bottom":"10px"});
      $("#left_scroll").css({"float":"left","height":"10px","width":"15px","position":"relative","margin-top":"140px","margin-right":"7px"});
      $("#right_scroll").css({"float":"left","height":"10px","width":"15px","position":"relative","margin-top":"140px"});
      var $this = $(this), // $(this)
      $items = $this.find('li'),
      item_width = $items.outerWidth() + 10,
      index = 0;
    
  $('#right_scroll').click(function(){  
    var carousel_css_left = parseInt($this.css('left'));
    var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
    var left_indent = carousel_left - item_width;
    // console.log($this);

 
    if ( index < $items.length -1) {
      $this.animate({'left' : left_indent}, 500);  
      index += 1;
    } else {
      // loop code
    }
  });  

  $('#left_scroll img').click(function(){  
    var carousel_css_left = parseInt($this.css('left'));
    var carousel_left = isNaN(carousel_css_left) ? 0 : carousel_css_left;
    var left_indent = carousel_left + item_width;  
    
    if (index > 0) {
      $this.animate({'left' : left_indent}, 500);  
      index -= 1;
    } else {
      // loop code
    }

  });  
  

        };

      init();
  }; 

})(jQuery);
