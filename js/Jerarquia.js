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



    $(".btn-operacion").click(function(){
        $('.dashboard').hide(300);
        $('.descripcion').show(300);
        $('.operaciones').show(300);
        var tipo = $(this).attr('data');
         var res = tipo.split('-');
         console.log(tipo);
        switch(tipo) {
            case 'parentesis':
            //titulo
            $('.descripcion .title').html('➤ Paréntesis');
            parentesis();
            break;
            case 'potencia':
            //titulo
            $('.descripcion .title').html('➤ Potencias y raíces');
            potencias();
            break;
            case 'multiplicacion':
            //titulo
            $('.descripcion .title').html('➤ Multiplicaciones y divisiones');
            multiplicaciones();
            break;
            case 'sumas':
            //titulo
            $('.descripcion .title').html('➤ Sumas y restas');
            sumas();
            break;
            default:
            // code block
        }

    });

    //-----------------------------------------------------
    //--------  BOTON REGRESAR A MENU ANTERIOR  -------------
    //-----------------------------------------------------
    $("#btn-regresar").click(function(){
        $('.descripcion').hide(300);
        $('.dashboard').show(300);
        $('.operaciones').hide(300);

    });


    //-----------------------------------------------------
    //-------------------  OPERACIONES  -------------------
    //-----------------------------------------------------
    function parentesis(){
        a=parseInt((Math.random()*10).toFixed());
        b=(Math.random()*10).toFixed();
        c=(Math.random()*10).toFixed();
        resultado=parseInt(b)+parseInt(c);
        $('.operaciones .instruccion').html('<p>Se tiene el siguiente ejemplo<br><b>'+a+'('+b+' + '+c+')</b></p>');
        $('.operaciones .numeros').html(
                    '<p>Se desarrolla primero lo que se encuentra dentro de los parentesis en este caso <br>'+a+'<b>(</b>'+b+' + '+c+'<b>)</b> = '+a+'<b>(</b>'+resultado+'<b>)</b></p>'+
                    '<p>Una vez desarrollado lo que esta dentro del parentesis se realiza lo que esta fuera de el;'+
                    '<p>'+a+'*'+resultado+'='+a*(resultado)+'</p>'
            );
        
    }


    function potencias(){
        a=(Math.random()*10).toFixed();
        b=(Math.random()*10).toFixed();
        c=(Math.random()*2).toFixed();
        d=(Math.random()*10).toFixed();
        e=(Math.random()*10).toFixed();
        // resultado=a+b*Math.pow(c,d)
        resultado2=parseInt(a)+parseInt(b*Math.pow(c,d));

        $('.operaciones .instruccion').html('<p>Se tiene la siguiente expresion <br><b>('+a+' + '+b+' * '+c+'<sup>'+d+'</sup>)</b></p>');

        $('.operaciones .numeros').html(
                    '<p>Primero se resuelve la parte que tiene el exponente <b>'+c+'</b> a la <b>'+d+'</b></p>'+
                    '<p>'+a+'+'+b+'*'+Math.pow(c,d)+'</p>'+
                    '<p>Una vez resuelta expoencial se procede a resolver lo que sigue en la jerarquia que son las multiplicaciones <br>'+a+'+'+b*Math.pow(c,d)+'</p>'+
                    '<p>Por ultimo se resuelven las sumas o restas en este caso sumas<br>'+resultado2+'</p>'
            );
    }


    function multiplicaciones(){
        a=(Math.random()*10).toFixed();
        b=(Math.random()*10).toFixed();
        c=(Math.random()*10).toFixed();
        d=(Math.random()*10).toFixed();
        e=(Math.random()*10).toFixed();
        // resultado=a+b*Math.pow(c,d)
        resultado=parseInt(a)+parseInt(b)*c+parseInt(d);
        // resultado2=parseInt(a)+parseInt(b*Math.pow(c,d))
        $('.operaciones .instruccion').html('<p>Se tiene la siguiente expresion <br><b>'+a+'+'+b+' * '+c+'+'+d+'</b></p>');

        $('.operaciones .numeros').html(
            '<p>Primero se resuelve la parte que tiene la multiplicacion o division <br>'+a+'+'+b+' * '+c+' + '+d+' = '+a+' + '+b*c+' + '+d+'</p>'+
            '<p>Una vez resuelta la multiplicacion se procede a resolver lo que sigue en la jerarquia quedando como resultado: <br>'+resultado+'</p'
        );
    }


    function sumas(){
        a=(Math.random()*10).toFixed()
        b=(Math.random()*10).toFixed()
        c=(Math.random()*10).toFixed()
        d=(Math.random()*10).toFixed()
        e=(Math.random()*10).toFixed()

        resultado=parseInt(a)-parseInt(b)-parseInt(c)+parseInt(d)
        $('.operaciones .instruccion').html('<p>Se tiene la siguiente expresion <br><b>'+a+' - '+b+' - '+c+' + '+d+'</b></p>');
        $('.operaciones .numeros').html(
            '<p>Como se tiene operadores de la misma jerarquia se procede a resolver directamente<br>'+a+' - '+b+' - '+c+' + '+d+'='+resultado+'</p>'

        );

    }





});

