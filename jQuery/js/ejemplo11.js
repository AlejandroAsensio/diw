$(document).ready(function(){
    $("p").on("click",function(){
        // $(this).fadeOut(jQuery.fx.speeds.fast);  
        // $(this).fadeOut(2000);
        // $(this).fadeOut(2000).fadeIn(1500);
        // $(this).fadeOut(2000).fadeIn(1500,function(){
        //     alert("FIN");
        // });
        $(this).fadeOut(2000).fadeIn(1500,function(){
            $(this).css("color","red");
        });
    })
    $("#aparecer").on("click",function(){
        $("p").show();
    })
    $("#desaparecer").on("click",function(){
        $("p").hide();
    })
})