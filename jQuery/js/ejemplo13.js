$(document).ready(function(){
    $("p:first").hide(5000).delay(1000).show(0)
        .queue(function(){
            $(this).css("color","red");
            $(this).dequeue();
        })
        .slideUp(4000).slideDown(3000);

        $("p:last").animate({
            "opacity" : "0.5"
        },1000)
})