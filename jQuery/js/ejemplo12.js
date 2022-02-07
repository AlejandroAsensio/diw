$(document).ready(function(){

    function actualiza(){
        $("#contador").text("Fx tiene "+ $("p").queue().length +" efectos");
    }

    $("#fadein").on("click",function(){
        $("p").fadeIn(1000, function(){
            actualiza();
        });
        actualiza();
    })
    $("#fadeout").on("click",function(){
        $("p").fadeOut(1000, function(){
            actualiza();
        });
        actualiza();
    })
    $("#slideup").on("click",function(){
        $("p").slideUp(1000, function(){
            actualiza();
        });
        actualiza();
    })
    $("#slidedown").on("click",function(){
        $("p").slideDown(1000, function(){
            actualiza();
        });
        actualiza();
    })
})