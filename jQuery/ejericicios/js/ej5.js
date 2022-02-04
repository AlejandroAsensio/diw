$(document).ready(function(){
    var longitud = 0;
    var consonantes = 0;
    var vocales = 0;
    var espacios = 0;
    var texto ="";
    var borrado = false;
    $("textarea.texto").on("keypress",function(obj){

    console.log(longitud);
    var codigo = obj.which;
    // console.log(codigo);
    texto = $(this).val();
        // console.log(String.fromCharCode(obj.which));
        // console.log(obj.which);
        longitud = $(this).val().length+1;
        // console.log(codigo);
        
            if(codigo == 97 || codigo == 101 || codigo == 105 ||codigo == 111 ||codigo == 117 ||
            codigo == 65 ||codigo == 69 ||codigo == 73 ||codigo == 79 ||codigo == 85 ){
                vocales++;
            }
            else if(codigo == 32){
                espacios++;
            }
            else{
                consonantes++;
            }
        

        $("span.cantidades").text("Numero de caracteres: "+longitud+"\nNumero de vocales: "+vocales+
            "\nNumero de consonantes: "+consonantes+"\nNumero de espacios en blanco: "+espacios);
    
        // console.log("N = "+longUp+"Tecla = "+obj.which);
        // console.log("Has borrado");
        
       

    });

});
