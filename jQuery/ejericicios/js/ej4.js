$(document).ready(function(){
    $(".contenedores").on({
        "click" : function(){
            $("body").css("background-color",$(this).css("background-color"));
        },
        "mousehover" : function(evento){
            $(".oculto").position();
        }
    }

})