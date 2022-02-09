$(document).ready(function(){
    
    $("div.afCont").hover(function(){
        $("p").slideDown(200);
        $("p").css({
            "visibility":"visible"
        });
    },function(){
        $("p").slideUp(100);
        $("p").css("visibility","hidden");
    });
    
    // $("div.afCont").blur(function(){
    //     $("p").slideUp(500);
    // })
})