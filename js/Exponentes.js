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
            if(base==0){
                base=1;
                $('#base1').val('1');
            }
            if (base2==0){
                base2=1;
                $('#base2').val('1');
            }
            
        }
        switch (ope) {
             case 'multiplica':
               
                if(base==base2){
                    rbase=base;
                    $('.explicacion').append('<p>Ya que las bases son iguales, la base sera igual a :</p><p><strong>'+ rbase+'x</strong></p>');
                }else{
                    rbase=base*base2;
                     $('.explicacion').append('<p>Ya que las bases son distintas, estos valores se multiplican </p><p>'+base+' * '+base2+' = '+ rbase+
                        '</p><p>Dando como base el valor de <strong>'+rbase+'x</strong>.</p>');
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
                $('.resultado-exponente').append(rbase+'x '+'<sup>'+rex+'</sup> = '+mexp);
               

                 // statements_1
                 break;
             case 'divide':
                 if(base==base2){
                    rbase=base;
                    $('.explicacion').append('<p>Ya que las bases son iguales, la base sera igual a :</p><p><strong>'+ rbase+'x </strong></p>');
                }else{
                    rbase=base/base2;
                     $('.explicacion').append('<p>Ya que las bases son distintas, estos valores se dividen </p><p>'+base+' / '+base2+' = '+ rbase+
                        '</p><p>Dando como base el valor de <strong>'+rbase+'x</strong>.</p>');
                }
                
                if(ex==ex2){
                    rex=ex;
                    $('.explicacion').append('<p>Ya que los exponentes son iguales el exponente sera:</p><p><strong>'+ rex+'</strong></p>');
                }else{
                    rex=parseInt(ex)-parseInt(ex2);
                     $('.explicacion').append('<p>Ya que los exponentes son diferentes, los valores se restan </p><p>'+ex+' - '+ex2+' = '+ rex+
                        '</p><p>Lo cual nos da como exponente el valor de <strong>'+rex+'</strong>.</p>');
                }
                
               
                $('.resultado-exponente').append(rbase+'x '+'<sup>'+rex+'</sup>');
                 // statements_1
                 break;
             case 'raiz':
                var expf =$('#expfuera').val();
                var raiz =$('#raiz').val();
                var pexpr=$('#expp2').val();
                
                console.log("resu",Math.pow(raiz,expdiv),expf,pexpr);
                if(expf%pexpr==0 && exp1>=pexpr){
                    var expdiv=parseInt(expf/pexpr);
                    $('.explicacion').append('<p>El exponente raiz es<strong> '+expf+'</strong>, la potencia es <strong>'+pexpr+'</strong> base de potencia <strong>'+raiz+'</strong>.</p>');
                    $('.explicacion').append('<p>La raiz paso a ser parte de la potencia ahora la expresion a resolver es <strong> '+raiz+'<sup>'+pexpr+'/'+expf+'</sup></strong>.</p>');
                    $('.explicacion').append('<p>Ya que el exponente puede ser dividido, este puede simplificarse a <strong> '+Math.pow(raiz,expdiv)+'<sup>'+expf/pexpr+'</sup></strong>.</p>');
                    
                    $('.resultado-exponente').append(Math.pow(raiz,expdiv)+'x'+'<sup>'+expdiv+'</sup>');

                }else{
                    var expdiv=(expf/pexpr).toFixed(2);
                    $('.explicacion').append('<p>El exponente raiz es<strong> '+expf+'</strong>, la potencia es <strong>'+pexpr+'</strong> base de potencia <strong>'+raiz+'</strong>.</p>');
                    $('.explicacion').append('<p>Otra forma de representarntar es <strong>( '+raiz+'x)<sup>'+expf+'/'+pexpr+'</sup></strong>.</p>');
                    $('.explicacion').append('<p>Ya desarrollado queda de la siguiente manera <strong> '+Math.pow(raiz,expdiv).toFixed(2)+'x<sup>'+expf+'/'+pexpr+'</sup></strong>.</p>');
                    
                    $('.resultado-exponente').append(Math.pow(raiz,expdiv).toFixed(2)+'x<sup>'+expf+'/'+pexpr+'</sup></strong>');
                    
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

