$(document).ready(function(){
    // $("ul.aficiones li:first").insertAfter("ul.aficiones li:last");
    // $("ul.aficiones li:last").after($("ul.aficiones li:first"));

    $("ul.aficiones").append($("<li>Nuevo Elemento</li>"));

    $("ul.aficiones li").on("click",function(){
        // $(this).appendTo("ul.propias");
        // $(this).insertAfter("ul.aficiones li:last");
        $(this).clone().appendTo("ul.propias");
        // $(this).clone(true).appendTo("ul.propias");
    })
})