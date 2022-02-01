$(document).ready(function(){
    $("body").on("keyup",function(obj_evento){
        console.log(String.fromCharCode(obj_evento.which));
    })
})