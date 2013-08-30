(function($){
    $.fn.carouselplugin = function(){
        $("#right-scroll img").click(function(){

            var item_width = $('#carousel-ul li').outerWidth(); 
            var left_indent = $('#carousel-ul') - item_width;
            console.log($('#carousel-ul'));


        });
    


  }; 

})(jQuery);