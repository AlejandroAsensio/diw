$(document).ready(function(){
    $("#numerar").on("click",function(){
        $("p").numerar(7);
        $("h1").numerar(1);
    })
    $("#colorear").on("click",function(){
        $("p").eq($("#eligeParrafo").val()).colorear($("#colorin").val());
        
    })
    
    $("#contar").on("click",function(){
        var parrafos = $("p").contar();
        alert("Número de parrafos: "+parrafos);
        
    })

    $("#dicolor").on("click",function(){
    
        $("p").each(function(){
         $(this).append("  "+$(this).dicolor());
            
        })
    
        
    })

    $("p").each(function(n){
        $("#eligeParrafo").append('<option value="'+n+'">'+ (n+1) +'</option>');
    })

    })
    
