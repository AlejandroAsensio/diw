$(document).ready(function(){
    $("body").on("keydown",function(obj){
        // console.log(obj.which);
//              38 arriba
//      37 izq              39 der
//              40 abajo
var $contenedor = $(".contenedor");
// console.log($contenedor);
var codigo = obj.which;
var pos = $contenedor.position();

        if(codigo==38){
            $contenedor.css({
                "top" : pos.top -20,
                "left" : pos.left
            });
        }
        if(codigo==37){
            $contenedor.css({
                "top" : pos.top ,
                "left" : pos.left-20
            });
        }
        if(codigo==39){
            $contenedor.css({
                "top" : pos.top ,
                "left" : pos.left+20
            });
        }
        if(codigo==40){
            $contenedor.css({
                "top" : pos.top+20 ,
                "left" : pos.left
            });
        }

    })

})