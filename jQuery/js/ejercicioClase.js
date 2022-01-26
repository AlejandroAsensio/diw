$(document).ready(function(){

    $("ul.lista ").on("click","li", function(){
        $(this).remove();
    })
    
    $("input#boton").on("click",function(){
        var aficion = $("input#aniadir").val();
        $("ul.lista").append("<li class='elemento'>"+aficion+"</li>");
        $("input#aniadir").val("");
    })

})