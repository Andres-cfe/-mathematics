jQuery(document).ready(function($){
    //-----------------------------------------------------
    //------------  ANIMACIÓN DE TEXTOS  ------------------
    //-----------------------------------------------------
      $('.titlemenu').textillate({
         in: { 
          effect: 'bounceIn' 
        },
        out:{
          effect: 'rotateOutDownRight'
        },
        loop: true
      });


console.log('tipo');

    //-----------------------------------------------------
    //--------  DETERMINAR TIPO DE OPERACION  -------------
    //-----------------------------------------------------
    $(".btn-operacion").click(function(){
        $('.dashboard').hide(300);
        $('.descripcion').show(300);
        var tipo = $(this).attr('data');
        var res = tipo.split('-');
        $('.exponente-content').show(300);
        $('.exponente').keypress(expo);
        switch(tipo) {
          case 'multiplica':           
            //titulo
            $('.signo').html('*');
            $('.descripcion .title').html('➤ Multiplicación de exponentes');
            $('.card-title').html('Multiplicación');
            $('#datos').show(300);
            $('#eraiz').hide(300);
            $('#epotencia').hide(300);
            break;
          case 'divide':
            $('.signo').html('/');
            $('.descripcion .title').html('➤ División de exponentes');
            $('.card-title').html('División');
            $('#datos').show(300);
            $('#eraiz').hide(300);
            $('#epotencia').hide(300);
            break;
          case 'raiz':
            $('.descripcion .title').html('➤ Raiz de exponentes');
            $('.card-title').html('Raiz');
            $('#eraiz').show(300);
            $('#datos').hide(300);
            $('#epotencia').hide(300);
            break;
          case 'potencia':
            $('.descripcion .title').html('➤ Potencias');
            $('.card-title').html('Potencia');
            $('#epotencia').show(300);
            $('#eraiz').hide(300);
            $('#datos').hide(300);
            break;
             default:
            // code block
        }  

        //pasar atributo de operacion a boton de resolver
        $('.resolver').attr('data',tipo);      

    });




     //-----------------------------------------------------
    //--------  BOTON REGRESAR A MENU ANTERIOR  -------------
    //-----------------------------------------------------
    $("#btn-regresar").click(function(){

        $('.dashboard').show(300);
        $('.descripcion').hide(300);
        $('.exponente-content').hide(300);
      
        $('.desarrollo-exponente').hide(300);
        $('.instrucciones').hide(300);
        $( ".expo" ).each(function() {
            $(this).val('');
        });
        $('#resultado').val('');
    });

     //-----------------------------------------------------
    //--------  BOTON DE RESOLVER  -------------
    //-----------------------------------------------------
    $(".resolver").click(function(){
         $('.resultado-exponente').empty();
         $('.explicacion').empty();
        var ope= $(this).attr('data'); 
        var rbase;
        var rex;
        if(ope=="multiplica"||ope=="divide"){
            var ex   = $('#exp1').val();
            var base = $('#base1').val();
            var ex2   = $('#exp2').val();
            var base2 = $('#base2').val();
        }
        switch (ope) {
             case 'multiplica':
                
                var sbase=base.split("");
                var sbase2=base.split("");
                if(base==base2){
                    rbase=base;
                    $('.explicacion').append('<p>Ya que las bases son iguales, la base sera igual a :</p><p><strong>'+ rbase+'</strong></p>');
                }else{
                    rbase=base*base2;
                     $('.explicacion').append('<p>Ya que las bases son distintas, estos valores se multiplican </p><p>'+base+' * '+base2+' = '+ rbase+
                        '</p><p>Dando como base el valor de <strong>'+rbase+'</strong>.</p>');
                }
                
                if(ex==ex2){
                    rex=ex;
                    $('.explicacion').append('<p>Ya que los exponentes son iguales el exponente sera:</p><p><strong>'+ rex+'</strong></p>');
                }else{
                    rex=parseInt(ex)+parseInt(ex2);
                     $('.explicacion').append('<p>Ya que los exponentes son diferentes, los valores se suman </p><p>'+ex+' + '+ex2+' = '+ rex+
                        '</p><p>Lo cual nos da como exponente el valor de <strong>'+rex+'</strong>.</p>');
                }

                var mexp=Math.pow(rbase, rex);
                $('.resultado-exponente').append(rbase+' '+'<sup>'+rex+'</sup> = '+mexp);
               

                 // statements_1
                 break;
             case 'divide':
                 if(base==base2){
                    rbase=base;
                    $('.explicacion').append('<p>Ya que las bases son iguales, la base sera igual a :</p><p><strong>'+ rbase+'</strong></p>');
                }else{
                    rbase=base/base2;
                     $('.explicacion').append('<p>Ya que las bases son distintas, estos valores se dividen </p><p>'+base+' * '+base2+' = '+ rbase+
                        '</p><p>Dando como base el valor de <strong>'+rbase+'</strong>.</p>');
                }
                
                if(ex==ex2){
                    rex=ex;
                    $('.explicacion').append('<p>Ya que los exponentes son iguales el exponente sera:</p><p><strong>'+ rex+'</strong></p>');
                }else{
                    rex=parseInt(ex)-parseInt(ex2);
                     $('.explicacion').append('<p>Ya que los exponentes son diferentes, los valores se restan </p><p>'+ex+' + '+ex2+' = '+ rex+
                        '</p><p>Lo cual nos da como exponente el valor de <strong>'+rex+'</strong>.</p>');
                }
                
               
                $('.resultado-exponente').append(rbase+' '+'<sup>'+rex+'</sup>');
                 // statements_1
                 break;
             case 'raiz':
                var expf =$('#expfuera').val();
                var raiz =$('#raiz').val();
                var pexpr=$('#expp2').val();

                if(expf%pexpr==0 && exp1>=expraiz){
                    var expdiv=parseInt(expf/pexpr);
                    $('.explicacion').append('<p>El exponente raiz es<strong> '+expf+'</strong>, la potencia es <strong>'+pexpr+'</strong> base de potencia <strong>'+raiz+'</strong>.</p>';
                    $('.explicacion').append('<p>La raiz paso a ser parte de la potencia ahora la expresion a resolver es <strong> '+raiz+'<sup>'+pexpr'/'+expf+'</sup></strong>.</p>';
                    $('.explicacion').append('<p>Ya que el exponente puede ser dividido, este puede simplificarse a <strong> '+Math.pow(raiz,expdiv)+'<sup>'+expf/pexpr'</sup></strong>.</p>';
                    
                    
                    // resultado='<label>Dando como resultado</label><br>'+coe12+'X<sup>'+exp12+'</sup><br>'
                    document.getElementById("raizdesarrollo").innerHTML=desarrollo+desarrollo2+desarrollo3
                    document.getElementById("raizresultado").innerHTML=Math.pow(coe1,exp1/expraiz)+'X<sup><sup>'+exp1/expraiz+'</sub></sup>'

                }else{
                    desarrollo='<label>El exponente raiz es '+expraiz+', la potencia es '+exp1+' y el coeficiente es '+coe1
                    desarrollo2=' <label>la otra forma de representar es </label><br> ('+coe1+' X )<sup><sup> '+exp1+'</sup>/<sub> '+expraiz+' </sub></sup><br>'
                    desarrollo3='desarrollandolo queda de la siguiente forma <br>'+Math.pow(coe1,exp1/expraiz).toFixed(2)+'X<sup><sup>'+exp1+'</sup>/<sub>'+expraiz+'</sub></sup>'
                    // resultado='<label>Dando como resultado</label><br>'+coe12+'X<sup>'+exp12+'</sup><br>'
                    document.getElementById("raizdesarrollo").innerHTML=desarrollo+desarrollo2+desarrollo3
                    document.getElementById("raizresultado").innerHTML=Math.pow(coe1,exp1/expraiz).toFixed(2)+'X<sup><sup>'+exp1+'</sup>/<sub>'+expraiz+'</sub></sup>'
                }
                 // statements_1

                 break;
             case 'potencia':
                var pex1 = $('#pexp1').val();
                var pbase= $('#pbase').val();
                var pex2 = $('#pexp2').val();
                var pexpn="";
                 
                 if(pex2!=""&&pex1!=""){
                   
                    var n=0;
                    var resulta="";
                    pexpn = pex1*pex2;
                    var potencia=Math.pow(pbase,pexpn);

                    while (pexpn>n) {
                        n++;
                        if(pexpn==n){

                            resulta=resulta+pbase+"";
                        }else{

                            resulta=resulta+pbase+" * ";
                
                        }
                        
                    }

                    $('.explicacion').append('<p>Nuestra base es la misma solo cambia el exponente ya que estos se multiplican</p><p><strong> '+ pex1+' * '+pex2+' = '+pexpn+'</strong> </p>');
                    $('.explicacion').append('<p>Una vez multiplicados la expresion queda </p><p><strong> '+ pbase+' <sup> '+pexpn+'</sup> = '+potencia+'</strong> </p>');
                    
                 }else{
                     var tope="";
                     var n=0;
                     var resulta="";

                    if(pex1==""){
                         var potencia=Math.pow(pbase,pex2);
                         pexpn = pex2;
                         tope=pex2;
                    }else {
                         var potencia=Math.pow(pbase,pex1);
                         pexpn = pex1;
                         tope=pex1;
                    }                   
                    
                    
                    while (tope>n) {
                        n++;
                        if(pex1==n){

                            resulta=resulta+pbase+"";
                        }else{

                            resulta=resulta+pbase+" * ";
                
                        }
                        
                    }

                     $('.explicacion').append('<p>Nuestra base es la misma solo se mutiplica las veces que solicita el exponente</p><p><strong> '+ pbase+' <sup> '+pexpn+'</sup> = '+ potencia+'</strong> </p>');
                    

                    
                 }
                 
                 $('.resultado-exponente').append(resulta+' = '+potencia);
                  
                                 // statements_1
                 break;
             default:
                 // statements_def
                 break;
         }     
        $('.desarrollo-exponente').show(300);
       
    });
    function expo(tecla){
        if(tecla.charCode < 48 || tecla.charCode > 57){
            if(tecla.charCode!=45){
               return false;  
            }
           
        } 
        
    }







});


function multiplicar(){
    let coe1=document.getElementById("mulcoe1").value
    let exp1=parseInt(document.getElementById("mulexp1").value)
    let coe2=document.getElementById("mulcoe2").value
    let exp2=parseInt(document.getElementById("mulexp2").value)
    coe12=coe1*coe2
    exp12=exp1+exp2
    desarrollo='<label>Los coeficientes se multiplican</label><br>'+coe1+' * '+coe2+' = '+ coe12+'<br>'
    desarrollo2='<label>Los exponentes se suman</label><br>'+exp1+' + '+exp2+' = '+ exp12+'<br>'
    resultado='<label>Dando como resultado</label><br>'+coe12+'X<sup>'+exp12+'</sup><br>'
    document.getElementById("muldesarrollo").innerHTML=desarrollo+desarrollo2+resultado
    document.getElementById("mulresultado").innerHTML=coe12+'X<sup>'+exp12+'</sup>'


}

function dividir(){
    let coe1=document.getElementById("divcoe1").value
    let exp1=parseInt(document.getElementById("divexp1").value)
    let coe2=document.getElementById("divcoe2").value
    let exp2=parseInt(document.getElementById("divexp2").value)
    coe12=coe1/coe2
    exp12=exp1-exp2
    desarrollo='<label>Los coeficientes se dividen</label><br>'+coe1+' / '+coe2+' = '+ coe12+'<br>'
    desarrollo2='<label>Los exponentes se restan</label><br>'+exp1+' - '+exp2+' = '+ exp12+'<br>'
    resultado='<label>Dando como resultado</label><br>'+coe12+'X<sup>'+exp12+'</sup><br>'
    document.getElementById("divdesarrollo").innerHTML=desarrollo+desarrollo2+resultado
    document.getElementById("divresultado").innerHTML=coe12+'X<sup>'+exp12+'</sup>'

}

function raiz(){
    
    let coe1=document.getElementById("raizcoe1").value
    let expraiz=parseInt(document.getElementById("raizexp1").value)
    let exp1=parseInt(document.getElementById("raizpotencia").value)
    
    // coe12=coe1/coe2
    // exp12=exp1-exp2
    if(exp1%expraiz==0 && exp1>=expraiz){
        desarrollo='El exponente raiz es '+expraiz+', la potencia es '+exp1+' y el coeficiente es '+coe1
        desarrollo2=' <br>La expresion quedaria de la siguiente forma</label><br> ('+coe1+' X )<sup><sup> '+exp1+'</sup>/<sub> '+expraiz+' </sub></sup><br>'
        desarrollo3='<label>Debido a que el exponente '+exp1+ ' puede ser dividido entre la raiz '+expraiz+' este puede ser simplificado a '+exp1/expraiz+'<br>Simplificando la expresion quedaria <br>'+Math.pow(coe1,exp1/expraiz)+'X<sup><sup>'+exp1/expraiz+'</sub></sup>'
        // resultado='<label>Dando como resultado</label><br>'+coe12+'X<sup>'+exp12+'</sup><br>'
        document.getElementById("raizdesarrollo").innerHTML=desarrollo+desarrollo2+desarrollo3
        document.getElementById("raizresultado").innerHTML=Math.pow(coe1,exp1/expraiz)+'X<sup><sup>'+exp1/expraiz+'</sub></sup>'

    }else{
        desarrollo='<label>El exponente raiz es '+expraiz+', la potencia es '+exp1+' y el coeficiente es '+coe1
        desarrollo2=' <label>la otra forma de representar es </label><br> ('+coe1+' X )<sup><sup> '+exp1+'</sup>/<sub> '+expraiz+' </sub></sup><br>'
        desarrollo3='desarrollandolo queda de la siguiente forma <br>'+Math.pow(coe1,exp1/expraiz).toFixed(2)+'X<sup><sup>'+exp1+'</sup>/<sub>'+expraiz+'</sub></sup>'
        // resultado='<label>Dando como resultado</label><br>'+coe12+'X<sup>'+exp12+'</sup><br>'
        document.getElementById("raizdesarrollo").innerHTML=desarrollo+desarrollo2+desarrollo3
        document.getElementById("raizresultado").innerHTML=Math.pow(coe1,exp1/expraiz).toFixed(2)+'X<sup><sup>'+exp1+'</sup>/<sub>'+expraiz+'</sub></sup>'
    }
    
}

function potenciar(){
    let coe1=document.getElementById("potcoe1").value
    let exp1=parseInt(document.getElementById("potexp1").value)
    let exp2=parseInt(document.getElementById("potexp2").value)
    elevacion=Math.pow(coe1,exp2)
    exp12=exp1*exp2
    desarrollo='El coeficiente se eleva al numero que esta fuera del parentesis<br>('+coe1+')<sup>'+exp2+'</sup> ='+elevacion+'<br>'
    desarrollo2='Los exponentes se multiplican<br>'+exp1+' * '+exp2+' = '+exp12+'<br>'
    desarrollo3='La expresion quedaria<br>'+elevacion+'X<sup>'+exp12+'</sup>'

    document.getElementById("potdesarrollo").innerHTML=desarrollo+desarrollo2+desarrollo3
    document.getElementById("potresultado").innerHTML=elevacion+'X<sup>'+exp12+'</sup>'
    
}
