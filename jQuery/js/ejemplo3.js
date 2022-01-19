$(document).ready(function(){
    // metodo text obtenedor
    texto_primer_parrafo = $("p:first").text();
    console.log(texto_primer_parrafo);

    // metodo text establecedor
    
    $("p:first").text("Este es el nuevo párrafo 1");

    // metodo css establecedor
    // $("p:last").css("font-size","20px");

    $("p:last").css({
        "font-size" : "+=10px",
        "color" : "white",
        "backgroundColor" : "blue"
    });

    // metodo css obtenedor
    console.log($("p").css("font-size"));
    
}) 