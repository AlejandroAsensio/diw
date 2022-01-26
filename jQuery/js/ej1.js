$(document).ready(function(){
// 1
    $("div.module").css("background","blue");
// 2
    $("ul#myList li:eq(2)").css("background","red");
    $("ul#myList").find("li").eq(2).css("background","red");
    $("ul#myList li:even").eq(1).css("background","red");
// 3
    $("label[for=q]").css("color","red");
        
// 4
    console.log($("*:hidden").length);
// 5
    console.log($("img[alt]").length);
// 6
    $("table tr:odd").css("background","green");

})