$(document).ready(function(){
    $(".contenedores").on({
        "click" : function(){
            $("body").css("background-color",$(this).css("background-color"));
        },
        "mouseover" : function(evento){
            $(".oculto").css({
                "top" : (evento.pageY +5),
                "left" : (evento.pageX + 20),
                "visibility" : "visible"
                // "background-color" : $(this).css("background-color")
                
            });
            $(".oculto").text($(this).text());
            
        },
        "mouseout" : function(){
            $(".oculto").css("visibility" , "hidden");
        }
    })

})