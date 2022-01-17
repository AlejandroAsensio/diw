$(document).ready(function(){
    //codigo jquery
    console.log("Número de párrafos: "+$("p").length);
    console.log("Elementos del ul: "+$("ul li").length);
    $("ul li:even").css("color","red");
})