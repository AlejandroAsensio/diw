$(document).ready(function(){
    //recorrer todos los elementos li del ul
    $("li").each(function(i, obj){
        alert("El texto del elemento "+i+" es: "+$(obj).text());
        // $(this).addClass("seleccionado");
    })
    
    

})