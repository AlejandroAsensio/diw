$(document).ready(function(){
    // 1
    $("img").each(function(){
        console.log($(this).attr("alt"));
    });

    // 2
    //  $("input").closest("form").addClass("clase");
    // $("#search :input").addClass("clase1");
    // $("form input").addClass("clase");

    // 3 
    $("#myList li.current").toggleClass("current").next().addClass("current");

    // 4
    console.log($("#specials select").closest("form").find("input:submit"));
    // console.log($("specials select").closest("input:submit"));

    // 5 

    $("ul#slideshow li:first").addClass("current").siblings().addClass("disabled");

})