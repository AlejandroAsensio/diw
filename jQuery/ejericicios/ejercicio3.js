$(document).ready(function(){

    // // 1
    for(var i =0;i<5;i++){
        $("ul#myList").append("<li>Nuevo Elemento"+i);
    }

    // 2
    // $("ul li:even").remove();

    // 3
    $("div.module:last").append("<h2>Nuevo H2</h2>").append("<p>Nuevo p</p>");

    // 4
    $("select").append("<option value='Wednesday'>Nueva Opcion</select>");

    // 5
    $("div.module:last").after("<div class='module'></div>");
    $("img:first").clone().appendTo("div.module:last");
})