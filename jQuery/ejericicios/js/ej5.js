$(document).ready(function(){
    
    $("textarea.texto").on("keyup",function(obj){
        var caracteres=0;
    var consonantes = 0;
    var vocales = 0;
    var espacios = 0;
    var texto ="";
        // console.log(String.fromCharCode(obj.which));
        texto = $(this).val();
        
        for(var i = 0;i<texto.length;i++){
            if(texto.charCodeAt(texto[i]) == 97 || texto.charCodeAt(texto[i]) == 101 || texto.charCodeAt(texto[i]) == 105 ||texto.charCodeAt(texto[i]) == 111 ||texto.charCodeAt(texto[i]) == 117 ||
            texto.charCodeAt(texto[i]) == 65 ||texto.charCodeAt(texto[i]) == 69 ||texto.charCodeAt(texto[i]) == 73 ||texto.charCodeAt(texto[i]) == 79 ||texto.charCodeAt(texto[i]) == 85 ){
                vocales++;
        }
        else if(texto.charCodeAt(texto[i]) == 32){
            espacios++;
        }
        else{
            consonantes++;
        }
        }
        caracteres = $(this).val().length+1;

        $("span.cantidades").text("Numero de caracteres: "+caracteres+"\nNumero de vocales: "+vocales+
            "\nNumero de consonantes: "+consonantes+"\nNumero de espacios en blanco: "+espacios);
    });
    // $("textarea.texto").on("keyup",function(obj){
    //     var cActuales = $(this).val().length;
    //     if(cActuales)

    // })
})