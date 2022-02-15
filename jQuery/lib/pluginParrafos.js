(function($){
    
    $.fn.numerar = function(inicio){
        
        this.each(function(){
            $(this).prepend(inicio+ ".- ");
            inicio++;
        })
    }   
    $.fn.colorear = function(color){
        this.css("color", color);
    }

    $.fn.contar = function(){
        return this.length;
    }
    $.fn.dicolor = function() {
        return this.css("color");
    }
    

})(jQuery);