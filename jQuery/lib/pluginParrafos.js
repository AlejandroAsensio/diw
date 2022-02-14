(function($){
    // plugin con metodos para parrafos
    $.fn.numerar = function(){
        
            var cont = 1;
        this.each(function(){
            $(this).prepend(cont+ ".- ");
            cont++;
        })
    }


})(jQuery);