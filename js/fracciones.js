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


    //-----------------------------------------------------
    //--------  DETERMINAR TIPO DE OPERACION  -------------
    //-----------------------------------------------------
    $(".btn-operacion").click(function(){
        $('.dashboard').hide(300);
        $('.descripcion').show(300);
        var tipo = $(this).attr('data');
         var res = tipo.split('-');
        switch(tipo) {
          case 'Interactivo':
            $('.Interactivo').show(300);
            //titulo
            $('.descripcion .title').html('➤ Interactivo');
            break;
          case 'comparacion':
            $('.comparacion').show(300);
            $('.descripcion .title').html('➤ Comparación');
            break;
          case 'conversion':
            $('.conversion').show(300);
            $('.descripcion .title').html('➤ Conversión');
            break;
          case 'equivalencia':
            $('.equivalencia').show(300);
            $('.descripcion .title').html('➤ Equivalencia');
            break;
          case 'simplificacion':
            $('.simplificacion').show(300);
            $('.descripcion .title').html('➤ Simplificación');
            break;
          case 'amplificacion':
            $('.amplificacion').show(300);
            $('.descripcion .title').html('➤ Amplificación');
            break;
          case 'suma':
            $('.suma').show(300);
            $('.descripcion .title').html('➤ Suma');
            break;
          default:
            // code block
        }        

    });


    //-----------------------------------------------------
    //--------  BOTON REGRESAR A MENU ANTERIOR  -------------
    //-----------------------------------------------------
    $("#btn-regresar").click(function(){

        $('.numero').each(function(){
            if($(this).hasClass('border-danger')){
                $(this).removeClass('border border-danger');
                $(this).next().remove();
            }
        });

        $('.dashboard').show(300);
        $('.descripcion').hide(300);
        $('.Interactivo').hide(300);
        $('.comparacion').hide(300);
        $('.conversion').hide(300);
        $('.equivalencia').hide(300);
        $('.simplificacion').hide(300);
        $('.amplificacion').hide(300);
        $('.suma').hide(300);
        $('.figura').hide(300);
        $('.desarrollo').hide(300);
        $('.desarrollo-mixta').hide(300);
        $('.desarrollo-comparacion').hide(300);
        $('.desarrollo-conversion').hide(300);
        $('.desarrollo-equivalencia').hide(300);
        $('.desarrollo-simplificacion').hide(300);
        $('.desarrollo-amplificacion').hide(300);
        $('.desarrollo-suma').hide(300);
        $('.instrucciones').hide(300);
        $( ".numero" ).each(function() {
            $(this).val('');
        });
        $('#resultado').val('');
    });

    //-----------------------------------------------------
    //------------  VALIDAR SOLO ENTEROS ------------------
    //-----------------------------------------------------
    $(".numero").keyup(function(){
      //$(this).css("background-color", "pink");
      $(this).val(parseInt($(this).val()));
    });

    $(".numero").focusout(function(){
        //$(this).css("background-color", "white");
    });

    $(".mixta .numero").focus(function(){
        //$('.propias-impropias .numero').val('');
        //$('.desarrollo').hide(300);
    });


    //-----------------------------------------------------
    //--------------  FUNCIONES DE FRACIONES --------------
    //-----------------------------------------------------
    $(".paint").click(function(){
        $('.desarrollo .alert-danger').remove();
        $('.desarrollo-mixta .alert-danger').remove();
        var tipo = $(this).attr('data');
        var padre = $(this).closest('form').attr('id');

        Validate(padre);

        switch(tipo) {
          case 'mixta':

            if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-mixta').hide(300);
            }else{
                $('.desarrollo-mixta').show(300);
                    $('html, body').animate({
                        scrollTop: $(".desarrollo-mixta").offset().top
                    }, 2000);
                if (parseInt($('#numerador-mixta').val()) > parseInt($('#denominador-mixta').val())) {
                    $('.subdesarrollo').show(300);
                    $('.explicacion-mixta').html('<b>Cociente con fracción impropia</b>');
                    calcular_mixta($('#cociente').val(),$('#numerador-mixta').val(),$('#denominador-mixta').val());
                }else{
                    $('.subdesarrollo').hide(300);
                    $('.explicacion-mixta').html('<b>Cociente con fracción propia</b>');
                    fraccion_mixta('propia',$('#cociente').val(),$('#numerador-mixta').val(),$('#denominador-mixta').val());
                }
            }

            break;
          case 'propia':
            if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo').hide();
            }else{
                $('.desarrollo').show(300);
                    $('html, body').animate({
                        scrollTop: $(".desarrollo").offset().top
                    }, 2000);
                if (parseInt($('#numerador').val()) > parseInt($('#denominador').val())) {
                    $('.inpropias').show(300);
                    $('.propias').hide(300);
                    $('.Interactivo .explicacion').html('<b>Es una fracción impropia</b>');
                    fracioninpropia($('#numerador').val(),$('#denominador').val());
                }else{
                    $('.propias').show(300);
                    $('.inpropias').hide(300);
                    $('.Interactivo .explicacion').html('<b>Es una fracción propia</b>');
                    fraccionpropia($('#numerador').val(),$('#denominador').val());
                }
            }
            break;
          case 'comparacion':
              if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-comparacion').hide();
              }else{
                $('.desarrollo-comparacion').show(300);
                $('html, body').animate({
                    scrollTop: $(".desarrollo-comparacion").offset().top
                }, 2000);
                comparacion();
              }
            break;
          case 'conversion':
              if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-conversion').hide();
              }else{
                $('.desarrollo-conversion').show(300);
                $('html, body').animate({
                    scrollTop: $(".desarrollo-conversion").offset().top
                }, 2000);
                conversion();
              }
            break;
          case 'equivalencia':
              if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-equivalencia').hide();
              }else{
                $('.desarrollo-equivalencia').show(300);
                $('html, body').animate({
                    scrollTop: $(".desarrollo-equivalencia").offset().top
                }, 2000);
                equivalencia();
              }
            break;
          case 'simplificacion':
              if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-simplificacion').hide();
              }else{
                $('.desarrollo-simplificacion').show(300);
                $('html, body').animate({
                    scrollTop: $(".desarrollo-simplificacion").offset().top
                }, 2000);
                simplificacion();
              }
            break;
          case 'amplificacion':
              if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-amplificacion').hide();
              }else{
                $('.desarrollo-amplificacion').show(300);
                $('html, body').animate({
                    scrollTop: $(".desarrollo-amplificacion").offset().top
                }, 2000);
                amplificacion();
              }
            break;
          case 'suma':
              if ($('#'+padre).hasClass('Invalidate')) {
                $('.desarrollo-suma').hide();
              }else{
                $('.desarrollo-suma').show(300);
                $('html, body').animate({
                    scrollTop: $(".desarrollo-suma").offset().top
                }, 2000);
                suma();
              }
            break;
        }
    });


    //-----------------------------------------------------
    //---  FUNCIONES DE FRACIONES PROPIAS E IMPROPIAS  ----
    //-----------------------------------------------------
    function fraccionpropia(numerador,denominador)
    {
        $('.btn-numerador').html(numerador+' <i class="fas fa-arrow-left ml-2 mr-2"></i> Numerador');
        $('.btn-denominador').html(denominador+' <i class="fas fa-arrow-left ml-2 mr-2"></i> Denominador');

        
        var medida = (360/denominador);

        var anguloinicio = 0;
        var angulofin = 0;
       $('.desarrollo canvas').setLayer('denominador', {
            visible: false // set to true instead to show the layer again
        }).drawLayers();
        $('.desarrollo canvas').setLayer('numerador', {
            visible: false // set to true instead to show the layer again
        }).drawLayers();



        for (var i = 0; i < denominador; i++) {
            angulofin = angulofin+medida;
            $('.desarrollo canvas')
            .drawSlice({
              layer: false,
              group: ['denominador'],
              fillStyle: '#36c',
              x: 180, y: 110,
              start: 0+anguloinicio, end: 0+angulofin,
              radius: 100,
              spread: 1 / 60
            });
            anguloinicio = angulofin;
        }

        setTimeout(function(){
            for (var i = 0; i < numerador; i++) {
                angulofin = angulofin+medida;
                $('.desarrollo canvas')
                .drawSlice({
                  layer: false,
                  group: ['numerador'],
                  fillStyle: '#c33',
                  x: 180, y: 110,
                  start: 0+anguloinicio, end: 0+angulofin,
                  radius: 100,
                  spread: 1 / 60
                });



                anguloinicio = angulofin;
            }

        }, 2500);
            /*
            $('.desarrollo canvas')
            .animateLayer('numerador', {
              width: 100, height: 50
            }, 1000, function(layer) {
              // Callback function
              $(this).animateLayer(layer, {
                fillStyle: '#c33'
              }, 'slow', 'swing');
            });
            */
        /*
        for (var i = 1; i <= denominador; i++) {
            angulofin = angulofin+medida;
            if (numerador >= i) {
                color = '#c33';
                nombre = 'numerador'+i;
                group = 'num';
            }else{
                color = '#36c';
                nombre = 'denominador'+i;
                group = 'den';
            }
            $('.desarrollo canvas')
            .drawSlice({
              layer: true,
              name: nombre,
              fillStyle: '#36c',
              x: 180, y: 110,
              start: 0+anguloinicio, end: 0+angulofin,
              radius: 100,
              spread: 1 / 60
            });

            $('.desarrollo canvas')
            ..animateLayerGroup('numerador'+i, {
              width: 100, height: 50
            }, 1000, function(layer) {
              // Callback function
              $(this).animateLayer(layer, {
                fillStyle: '#c33'
              }, 'slow', 'swing');
            });

            anguloinicio = angulofin;

        }
        */
    }

    function fracioninpropia(numerador,denominador){

        var residuo = (numerador%denominador);
        var cociente = (numerador/denominador);

        $('.operacion').html(numerador+' / '+denominador+'= <b>'+parseInt(cociente)+'</b>, residuo <b>'+residuo+'</b>');
        $('.inpropias .cociente').html(parseInt(cociente));
        $('.inpropias .residuo').html(parseInt(residuo));
        $('.inpropias .denominador').html(parseInt(denominador));
        fraccion_mixta('impropia-fig',cociente,residuo,denominador);
        if (residuo > 0) {
            $('.desarrollo .resultado-residuo').show();
            $('.desarrollo .resultado-denominador').show();
        }else{
            $('.desarrollo .resultado-residuo').hide();
            $('.desarrollo .resultado-denominador').hide();
        }
    }

    //-----------------------------------------------------
    //----------  FUNCIONES DE FRACIONES MIXTA  -----------
    //-----------------------------------------------------
    function calcular_mixta(cociente,numerador,denominador){
        var residuo = (numerador%denominador);
        var cociente1 = (numerador/denominador);

        cociente1 = parseInt(cociente1)+parseInt(cociente);

        fraccion_mixta('propia',cociente1,residuo,denominador);

        $('.subdesarrollo').html('<p><b>El resultado es:</b></p>'+'<div class="row">'+
                        '<h5 class="col-lg-3 col-md-3 col-3 mt-3">'+
                            'cociente <i class="fas fa-arrow-right ml-2"></i>'+
                        '</h5>'+
                        '<h3 class="cociente col-lg-1 col-md-1 col-1 pt-3" style="border: solid 2px #5cb85c; color:#5cb85c;">'+cociente1+
                        '</h3>'+
                        '<h6 class="resultado-residuo col-lg-8 col-md-8 col-6">'+
                            '<div class="col-lg-12 col-md-12 col-12 row">'+
                               '<h5 class="residuo mr-3" style="border: solid 2px #c33; color:#c33;">'+residuo+'</h5>    <i class="fas fa-arrow-left ml-2 mr-2"></i> Numerador '+
                            '</div>'+
                            '<hr class="col-lg-2 col-md-2 col-2 float-left" style="background-color: red;"><hr class="col-lg-10 col-md-10 col-10 border border-white">'+
                            '<div class="resultado-denominador col-lg-12 col-md-12 col-12 row">'+
                               '<h5 class="denominador  mr-3" style="border: solid 2px #36c; color:#36c;">'+denominador+'</h5>      <i class="fas fa-arrow-left ml-2 mr-2"></i> Divisor y denominador original'+
                            '</div>'+
                        '</h6>'+
                    '</div>');

        if (residuo > 0) {
            $('.desarrollo-mixta .resultado-residuo').show();
            $('.desarrollo-mixta .resultado-denominador').show();
        }else{
            $('.desarrollo-mixta .resultado-residuo').hide();
            $('.desarrollo-mixta .resultado-denominador').hide();
        }

    }


    function fraccion_mixta(container,cociente,numerador,denominador){
        
        $('.'+container).html('<div class="enteros col-lg-6 col-md-6 col-6 row">'+
                  '</div>'+
                  '<div class="col-lg-6 col-md-6 col-6">'+
                      '<canvas width="320" height="320" width="300" height="300" style="width: 200px; height:200px; margin: 0px auto; "></canvas>'+
                  '</div>');


        for (var i = 1; i <= cociente; i++) {
            $('.'+container+' .enteros').append('<div class="circulo  ml-2" style="width: 40px; height: 40px; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; background: #5cb85c;"></div>');
        }

        var medida = (360/denominador);

        var anguloinicio = 0;
        var angulofin = 0;

        if(cociente > 0  && numerador == 0 || denominador == 0){

        }else{
           $('.'+container+' canvas').setLayer('denominador', {
                visible: false // set to true instead to show the layer again
            }).drawLayers();
            $('.'+container+' canvas').setLayer('numerador', {
                visible: false // set to true instead to show the layer again
            }).drawLayers();



            for (var i = 0; i < denominador; i++) {
                angulofin = angulofin+medida;
                $('.'+container+' canvas')
                .drawSlice({
                  layer: false,
                  group: ['denominador'],
                  fillStyle: '#36c',
                  x: 180, y: 110,
                  start: 0+anguloinicio, end: 0+angulofin,
                  radius: 100,
                  spread: 1 / 60
                });
                anguloinicio = angulofin;
            }

            setTimeout(function(){
                for (var i = 0; i < numerador; i++) {
                    angulofin = angulofin+medida;
                    $('.'+container+' canvas')
                    .drawSlice({
                      layer: false,
                      group: ['numerador'],
                      fillStyle: '#c33',
                      x: 180, y: 110,
                      start: 0+anguloinicio, end: 0+angulofin,
                      radius: 100,
                      spread: 1 / 60
                    });
                    anguloinicio = angulofin;
                }

            }, 2500);
        }


    }


    //-----------------------------------------------------
    //-------------  FUNCIONES DE COMPARACIÓN  ------------
    //-----------------------------------------------------
    function comparacion(){
        numerador1=parseInt($("#compnumerador1").val());
        numerador2=parseInt($("#compnumerador2").val());
        denominador1=parseInt($("#compdenominador1").val());
        denominador2=parseInt($("#compdenominador2").val());
        simbolo = $("#comp").val();
        ter1=numerador1*denominador2;
        ter2=numerador2*denominador1;
        var resultado;
        $('.resultado-comparacion').removeClass('text-danger');
         switch(simbolo){
            case '>':
                if(ter1>ter2){
                    resultado='La primera fracción es mayor que la segunda';
                }else if(ter1==ter2){
                    resultado='Las fracciones equivalen lo mismo';
                }else{
                    resultado='La segunda fracción es mayor que la primera';
                    $('.resultado-comparacion').addClass('text-danger');
                }
                break;
            case '<':
                if(ter1<ter2){
                    resultado='Es correcto';
                }else if(ter1==ter2){
                    resultado='Las fracciones equivalen lo mismo';
                }else{
                    resultado='La primera fración es mayor que la segunda';
                    $('.resultado-comparacion').addClass('text-danger');
                }
                break;
            case '=':
                if(ter1==ter2){
                    resultado = '';
                    resultado='Son equivalentes';
                }else{
                    resultado = '';
                    resultado='No son equivalentes '+ter1+' y '+ter2;

                }
                break;
        }

        if(numerador1 >= denominador1){
          console.log("mixta");
          var residuo = (numerador1%denominador1);
          var cociente = (numerador1/denominador1);

          fraccion_mixta('figura-comparacion1',cociente,residuo,denominador1);
        }else{
          console.log("normal 1");
          Draw('figura-comparacion1',numerador1,denominador1);
        }

        if (numerador2 >= denominador2) {
          console.log("mixta");
          var residuo = (numerador2%denominador2);
          var cociente = (numerador2/denominador2);

          fraccion_mixta('figura-comparacion2',cociente,residuo,denominador2);
        }else{
          console.log("normal 2");
          Draw('figura-comparacion2',numerador2,denominador2);
        }
        
        $('.num1').html(numerador1);
        $('.num2').html(numerador2);
        $('.den1').html(denominador1);
        $('.den2').html(denominador2);

        $('.desarrollo-comparacion .explicacion').html('<p><b>Explicación:</b></p><p>1- Multiplicar numerador del primer termino por el denominador del segundo termino y se deja como primer termino. </p>'+
                                                        '<p><i>'+numerador1+' * '+denominador2+'= <b>'+ter1+'</b></i></p>'+
                                                        '<p>2-Multiplicar denominador del segundo termino por el numerador del primer termino y se deja como segundo termino</p>'+
                                                        '<p><i>'+denominador2+' * '+numerador1+'= <b>'+ter2+'</b></i></p>'+
                                                        '<p>3- Se hace una comparacion entre los terminos y se observa que se cumpla la condicion</p>'+
                                                        '<p><b>'+ter1+' '+simbolo+' '+ter2+'</b></p>');
        $('.resultado-comparacion').html('<b>'+resultado+'</b>');
    }


    //-----------------------------------------------------
    //-------------  FUNCIONES DE CONVERSIÓN  -------------
    //-----------------------------------------------------
    function conversion(){
        var entero=parseInt($("#entero").val());
        var numerador=parseInt($("#mixtonumerador").val());
        var denominador=parseInt($("#mixtodenominador").val());

        resnumerador=((entero*denominador)+parseInt(numerador));

        $('.cociente-com').html(entero);
        $('.num1-com').html(numerador);
        $('.den1-com').html(denominador);


        if (numerador >= denominador) {
          var residuo = (numerador%denominador);
          var cociente = (numerador/denominador);
          fraccion_mixta('fig1-com',cociente,residuo,denominador);
        }else{
          fraccion_mixta('fig1-com',entero,numerador,denominador);  
        }
        

        $('.num2-com').html(resnumerador);
        $('.den2-com').html(denominador);

        if (parseInt(resnumerador) >= parseInt(denominador)) {
          var residuo = (resnumerador%denominador);
          var cociente = (resnumerador/denominador);
          fraccion_mixta('fig2-com',cociente,residuo,denominador);
        }else{

        }


       $('.resultado-conversion').html('<div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+resnumerador+'</div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12"><hr class="border border-danger"></div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+denominador+'</div>'); 

       $('.desarrollo-conversion .explicacion').html('<p><b>Explicación:</b></p><p>1- Se multiplica el denominador  de la fracción (<b>'+denominador+'</b>) por el numero entero (<b>'+entero+'</b>) y se suma con el valor del numerador (<b>'+numerador+'</b>) el resultado se deja en el numerador.</p>'+
        '<p>('+denominador+' * '+entero+')+'+numerador+' = <b>'+resnumerador+'</b></p>'+
        '<p>2- En el denominador se conserva el valor que manejaba anteriormente (<b>'+denominador+'</b>)</p>'
        );

    }


    //-----------------------------------------------------
    //------------  FUNCIONES DE EQUIVALENCIA  ------------
    //-----------------------------------------------------
    function equivalencia(){
        var numerador1 = parseInt($('#numerador1').val());
        var numerador2 = parseInt($('#numerador2').val());
        var denominador1 = parseInt($('#denominador1').val());
        var denominador2 = parseInt($('#denominador2').val());

        var equi1 = (numerador1/denominador1);
        var equi2 = (numerador2/denominador2);

        if (equi1 == equi2) {
            resultado = 'Son equivalentes';
        }else{
            resultado = 'No son equivalentes';
        }

        $('.resultado-equivalencia').html('<b>'+resultado+'</b>');
        $('.numerador1').html(numerador1);
        $('.numerador2').html(numerador2);
        $('.denominador1').html(denominador1);
        $('.denominador2').html(denominador2);
        $('.decimal1').html(equi1);
        $('.decimal2').html(equi2);

        if (numerador1 >= denominador1) {
                var residuo = (numerador1%denominador1);
                var cociente = (numerador1/denominador1);

                fraccion_mixta('fig_equivalencia1',cociente,residuo,denominador1);

        }else{
            Draw('fig_equivalencia1',numerador1,denominador1);
        }
        
        if (numerador2 >= denominador2) {
                var residuo = (numerador2%denominador2);
                var cociente = (numerador2/denominador2);

                fraccion_mixta('fig_equivalencia2',cociente,residuo,denominador2);
        }else{
            Draw('fig_equivalencia2',numerador2,denominador2);    
        }
        
    }


    //-----------------------------------------------------
    //-----------  FUNCIONES DE SIMPLIFICACIÓN ------------
    //-----------------------------------------------------
    function simplificacion(){
        a=$("#simplnumerador").val();
        b=$("#simpldenominador").val();
        var iaux; //auxiliar
        a = Math.abs(a); //tomamos valor absoluto
        b = Math.abs(b);
        var i1 = Math.max(a, b); //i1 = el más grande
        var i2 = Math.min(a, b); //i2 = el más pequeño

        do {
            iaux = i2; //guardar divisor
            i2 = i1 % i2; //resto pasa a divisor
            i1 = iaux; //divisor pasa a dividendo
        } while (i2 !== 0);

        rnumerador=a/parseInt(i1);
        rdenominador=b/parseInt(i1);

        $('.resultado-simplificacion').html('<div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+rnumerador+'</div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12"><hr class="border border-danger"></div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+rdenominador+'</div>'); 
        $('.maximodivisor').html(i1);
        $('.simnumerador').html(a);
        $('.simdenominador').html(b);
        $('.newnumerador').html(rnumerador);
        $('.newdenominador').html(rdenominador);
        Draw('antfraccion',a,b);
        Draw('newfraccion',rnumerador,rdenominador);
        return i1; //ultimo resto no nulo
    }


    //-----------------------------------------------------
    //-----------  FUNCIONES DE SIMPLIFICACIÓN ------------
    //-----------------------------------------------------
    function amplificacion(){
        amplificador=parseInt($("#amplificador").val());
        numerador=parseInt($("#amplnumerador").val());
        denominador=parseInt($("#ampldenominador").val());

        ampnumerador = (numerador*amplificador);
        ampdenominador = (denominador*amplificador);


        $('.resultado-amplificacion').html('<div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+ampnumerador+'</div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12"><hr class="border border-danger"></div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+ampdenominador+'</div>'); 
        $('.desarrollo-amplificacion .amplificador').html(amplificador);
        $('.desarrollo-amplificacion .numerador').html(numerador);
        $('.desarrollo-amplificacion .denominador').html(denominador);
        $('.desarrollo-amplificacion .newnumerador').html(ampnumerador);
        $('.desarrollo-amplificacion .newdenominador').html(ampdenominador);
        Draw('ampfraccion1',numerador,denominador);
        Draw('ampfraccion2',ampnumerador,ampdenominador);
    }

    //-----------------------------------------------------
    //----------------  FUNCIONES DE SUMA -----------------
    //-----------------------------------------------------
    function suma(){
        let numerador1 = parseInt($("#sumanumerador1").val());
        let denominador1 = parseInt($("#sumadenominador1").val());
        let numerador2 = parseInt($("#sumanumerador2").val());
        let denominador2 = parseInt($("#sumadenominador2").val());

        let resresNumerador=0;
        let resultadoNumerador1=0;
        let resultadoDenominador=0;
        

        if(denominador1==denominador2){
            resultadoNumerador=parseInt(numerador1)  + parseInt(numerador2);
            resultadoDenominador=denominador2;
            
            $('.resultado-suma').html('<div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+resultadoNumerador+'</div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12"><hr class="border border-danger"></div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+resultadoDenominador+'</div>'); 

            $('.desarrollo-suma .explicacion').html('<p><b>Explicación:</b>'+
              '</p><p>Como las 2 fracciones tienen el mismo denominador, lo que tenemos que hacer es dejar el mismo denominador, que es <b>'+denominador1+'</b>, y sumar los numeradores:</p>'+
              '<p>'+numerador1+' + '+numerador2+' = '+resultadoNumerador+'</p>'
              );
        }else{
            resultadoNumerador1=numerador1 * denominador2;
            resultadoNumerador2=numerador2 * denominador1;
            resultadoDenominador=denominador1*denominador2;
            resultadoNumerador=resultadoNumerador1 + resultadoNumerador2;

            if(resultadoNumerador >= resultadoDenominador){
                var residuo = (resultadoNumerador%resultadoDenominador);
                var cociente = (resultadoNumerador/resultadoDenominador);


                $('.resultado-suma').html('<div class="col-lg-4 col-md-4 col-12">'+parseInt(cociente)+'</div><div class="col-lg-4 col-md-4 col-12">'+residuo+'</div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12"><hr class="border border-danger"></div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+resultadoDenominador+'</div>'); 

            }else{
              $('.resultado-suma').html('<div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+resultadoNumerador+'</div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12"><hr class="border border-danger"></div><div class="col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-12">'+resultadoDenominador+'</div>'); 
            }


            $('.desarrollo-suma .explicacion').html('<p><b>Explicación:</b></p>'+
              '<p>1- Se tuvo que buscar un denominador en comun multiplicando entre denominadores</p>'+
              '<p>2- Multiplicar numerador del primer termino por el denominador del segundo termino</p>'+
              '<p>3- Multiplicar numerador del segundo termino por el denominador del primero</p>'+
              '<p>4- El resultado de cada una de esas multiplicaciones se suman y ese es tu numerador al sumar los dos terminos resultantes de la multiplicacion</p>'
              );
        }

        
    }




















    //-----------------------------------------------------
    //---------------  DIBUJAR FRACCIÓN  ------------------
    //-----------------------------------------------------
    function Draw(container,numerador,denominador){
        
        $('.'+container).html('<canvas width="300" height="300" style="width: 150px; height:150px; margin: 0px auto; "></canvas>');

        $('.'+container+' canvas').clearCanvas();
        var medida = (360/denominador);

        var anguloinicio = 0;
        var angulofin = 0;
       $('.'+container+' canvas').setLayer('denominador', {
                visible: false // set to true instead to show the layer again
            }).drawLayers();
            $('.'+container+' canvas').setLayer('numerador', {
                visible: false // set to true instead to show the layer again
            }).drawLayers();



            for (var i = 0; i < denominador; i++) {
                angulofin = angulofin+medida;
                $('.'+container+' canvas')
                .drawSlice({
                  layer: false,
                  group: ['denominador'],
                  fillStyle: '#36c',
                  x: 180, y: 110,
                  start: 0+anguloinicio, end: 0+angulofin,
                  radius: 100,
                  spread: 1 / 60
                });
                anguloinicio = angulofin;
            }

            setTimeout(function(){
                for (var i = 0; i < numerador; i++) {
                    angulofin = angulofin+medida;
                    $('.'+container+' canvas')
                    .drawSlice({
                      layer: false,
                      group: ['numerador'],
                      fillStyle: '#c33',
                      x: 180, y: 110,
                      start: 0+anguloinicio, end: 0+angulofin,
                      radius: 100,
                      spread: 1 / 60
                    });
                    anguloinicio = angulofin;
                }

            }, 2500);
    }



    //-----------------------------------------------------
    //-------------  VALIDACIÓN DE CAMPOS  ----------------
    //-----------------------------------------------------
    function Validate(padre){
        var requeridos = 0;
        var completos = 0;
        var status;
        $("#"+padre+" .numero").each(function(){
            requeridos++;
            if($(this).val() == '' || $(this).val() <= 0){
                completos--;
                if(!$(this).hasClass('border-danger')){
                    $(this).addClass('border border-danger');
                    $(this).after('<span class="text-danger"><sup>Valor no valido</sup></span>');
                }
            }else{
                completos++;
                $(this).removeClass('border border-danger');
                $(this).next().remove();
            }
        });

        if (requeridos == completos) {
            $('#'+padre).removeClass('Invalidate');
        }else{
            $('#'+padre).addClass('Invalidate');
        }
    }

    function limpiar(){
        $('form').each(function(){
            if ($(this).hasClass('Invalidate')) {
                $(this).removeClass('Invalidate');
            }
        });
    }





























});  






















// Pagina de operaciones
function sumar(){
    let numerador1 = document.getElementById("numerador1").value;
    let denominador1 = document.getElementById("denominador1").value;
    let numerador2 = document.getElementById("numerador2").value;
    let denominador2 = document.getElementById("denominador2").value;

    let resresNumerador=0
    let resultadoNumerador1=0
    let resultadoDenominador=0
    let explicacion=""

    if(denominador1==denominador2){
        resresNumerador=parseInt(numerador1)  + parseInt(numerador2)
        resultadoDenominador=denominador2
        explicacionnumerador=numerador1+' + '+numerador2;
        explicaciondenominador=' '+denominador1+' '
        desarrollo="<sup>"+explicacionnumerador+"</sup>/<sub>"+explicaciondenominador+"</sub>"
        desarrollointer=""
        desarrollofinal="<sup><label>"+resresNumerador+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
        desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
        explicacion="<h4>Pasos</h4>1-Se suman directamente porque tienen un denominador en comun, es decir, tienen el mismo numero en el denominador"
    }else{
        resultadoNumerador1=numerador1 * denominador2
        resultadoNumerador2=numerador2 * denominador1
        resultadoDenominador=denominador1*denominador2
        resresNumerador=resultadoNumerador1 + resultadoNumerador2
        explicacionnumerador='('+numerador1+')('+denominador2+') + ('+numerador2+')('+denominador1+')';
        explicaciondenominador='('+denominador1+')('+denominador2+')'
        desarrollo="<sup>"+explicacionnumerador+"</sup>/<sub>"+explicaciondenominador+"</sub>"
        desarrollointer="<sup><label>"+resultadoNumerador1+" + "+resultadoNumerador2+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
        desarrollofinal="<sup><label>"+resresNumerador+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
        desarrollointegrada=desarrollo+" = "+desarrollointer+" = "+desarrollofinal
        explicacion="<h4>Pasos</h4>1-Se tuvo que buscar un denominador en comun multiplicando entre denominadores <br> 2- Multiplicar numerador del primer termino por el denominador del segundo termino <br> 3-Multiplicar numerador del segundo termino por el denominador del primero <br> 5- El resultado de cada una de esas multiplicaciones se suman y ese es tu numerador al sumar los dos terminos resultantes de la multiplicacion"
    }
    
    console.log("Imprimiendo suma",resultadoDenominador, resresNumerador)
    // document.querySelector('#label').innerText = 'Tu Valor';
    document.getElementById('resultadonumerador').innerHTML=resresNumerador;
    document.getElementById('resultadodenominador').innerHTML=resultadoDenominador;
    document.getElementById('desarrollo').innerHTML=desarrollointegrada+"<br>"+explicacion

    return resresNumerador, resultadoDenominador 
}




function restar(){
    let numerador1 = document.getElementById("rnumerador1").value;
    let denominador1 = document.getElementById("rdenominador1").value;
    let numerador2 = document.getElementById("rnumerador2").value;
    let denominador2 = document.getElementById("rdenominador2").value;

    
    let resresNumerador=0
    let resultadoNumerador1=0
    let resultadoDenominador=0
    if(denominador1==denominador2){
        resresNumerador=parseInt(numerador1)  - parseInt(numerador2)
        resultadoDenominador=denominador2
        explicacionnumerador=numerador1+' - '+numerador2;
        explicaciondenominador=' '+denominador1+' '
        desarrollo="<sup>"+explicacionnumerador+"</sup>/<sub>"+explicaciondenominador+"</sub>"
        desarrollointer=""
        desarrollofinal="<sup><label>"+resresNumerador+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
        desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
        explicacion="<h4>Pasos</h4>1-Se resta directamente porque tienen un denominador en comun, es decir, tienen el mismo numero en el denominador"
    }
    else{
        resultadoNumerador1=numerador1 * denominador2
        resultadoNumerador2=numerador2 * denominador1
        resultadoDenominador=denominador1*denominador2
        resresNumerador=resultadoNumerador1 - resultadoNumerador2
        explicacionnumerador='('+numerador1+')('+denominador2+') - ('+numerador2+')('+denominador1+')';
        explicaciondenominador='('+denominador1+')('+denominador2+')'
        desarrollo="<sup>"+explicacionnumerador+"</sup>/<sub>"+explicaciondenominador+"</sub>"
        desarrollointer="<sup><label>"+resultadoNumerador1+" - "+resultadoNumerador2+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
        desarrollofinal="<sup><label>"+resresNumerador+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
        desarrollointegrada=desarrollo+" = "+desarrollointer+" = "+desarrollofinal
        explicacion="<h4>Pasos</h4>1-Se tuvo que buscar un denominador en comun multiplicando entre denominadores <br> 2- Multiplicar numerador del primer termino por el denominador del segundo termino <br> 3-Multiplicar numerador del segundo termino por el denominador del primero <br> 5- El resultado de cada una de esas multiplicaciones se restan y ese es tu numerador al sumar los dos terminos resultantes de la multiplicacion"
    }
    console.log("Imprimiendo resta",resultadoDenominador, resresNumerador)
    // document.querySelector('#label').innerText = 'Tu Valor';
    document.getElementById('rresultadonumerador').innerHTML=resresNumerador;
    document.getElementById('rresultadodenominador').innerHTML=resultadoDenominador;
    document.getElementById('rdesarrollo').innerHTML=desarrollointegrada+"<br>"+explicacion


    return resresNumerador, resultadoDenominador 
}

function multiplicar(){
    let numerador1 = document.getElementById("mnumerador1").value;
    let denominador1 = document.getElementById("mdenominador1").value;
    let numerador2 = document.getElementById("mnumerador2").value;
    let denominador2 = document.getElementById("mdenominador2").value;

    let resultadoNumerador=0
    let resultadoDenominador=0
    resultadoNumerador=numerador1 * numerador2
    resultadoDenominador=denominador1 * denominador2
    explicacionnumerador='('+numerador1+')*('+numerador2+')';
    explicaciondenominador='('+denominador1+')('+denominador2+')'
    desarrollo="<sup>"+explicacionnumerador+"</sup>/<sub>"+explicaciondenominador+"</sub>"
    desarrollointer=""
    desarrollofinal="<sup><label>"+resultadoNumerador+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
    desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
    explicacion="<h4>Pasos</h4>1- Multiplicar directamente numerador del primer termino por el numerador del segundo <br>2- Multiplicar el denominador del primer termino por el denominador del segundo"


    console.log("Imprimiendo multiplicacion",resultadoDenominador, resultadoNumerador)
    document.getElementById('mresultadonumerador').innerHTML=resultadoNumerador;
    document.getElementById('mresultadodenominador').innerHTML=resultadoDenominador;
    document.getElementById('mdesarrollo').innerHTML=desarrollointegrada+"<br>"+explicacion


}

function dividir(){
    let numerador1 = document.getElementById("dnumerador1").value;
    let denominador1 = document.getElementById("ddenominador1").value;
    let numerador2 = document.getElementById("dnumerador2").value;
    let denominador2 = document.getElementById("ddenominador2").value;

    let resultadoNumerador=0
    let resultadoDenominador=0
    resultadoNumerador=numerador1 * denominador2
    resultadoDenominador=numerador2 * denominador1
    explicacionnumerador='('+numerador1+')*('+denominador2+')';
    explicaciondenominador='('+numerador2+')('+denominador1+')'
    desarrollo="<sup>"+explicacionnumerador+"</sup>/<sub>"+explicaciondenominador+"</sub>"
    desarrollointer=""
    desarrollofinal="<sup><label>"+resultadoNumerador+"</label></sup> / <sub><label>"+resultadoDenominador+"</label></sub>"
    desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
    explicacion="<h4>Pasos</h4>1- Multiplicar directamente numerador del primer termino por el denominador del segundo y se deja en numerador <br>2- Multiplicar el denominador del primer termino por el numerador del segundo termino y se deja en el denominador"


    console.log("Imprimiendo division",resultadoDenominador, resultadoNumerador)
    document.getElementById('dresultadonumerador').innerHTML=resultadoNumerador;
    document.getElementById('dresultadodenominador').innerHTML=resultadoDenominador;
    document.getElementById('ddesarrollo').innerHTML=desarrollointegrada+"<br>"+explicacion

}


// function representar(numerador1, denominador1){
//     return numerador1, denominador1
// }

function mayorMenorque(numerador1,denominador1, numerador2, denominador2 ){
    let fraccionizq, fraccionderecha
    let mensaje=""
    fraccionizq=numerador1*denominador2
    fraccionderecha=numerador2*denominador1
    if(fraccionizq>fraccionderecha){
        mensaje="Es mayor que"
    }
    else if(fraccionizq<fraccionderecha){
        mensaje="Es menor que"
    }
    else{
        mensaje="Es igual que"
    }
    return mensaje
}
function representar(){
    let numerador=parseInt(document.getElementById("reprenumerador").value)
    let denominador=parseInt(document.getElementById("repredenominador").value)
    if (denominador<=numerador){
        // dibujarPastel()
        res=numerador/denominador
        
        // resdesarrollo='<label id="repreEntero"></label><sup><label type="number" id="rreprenumerador" ></sup> / <sub><label type="number" id="rrepredenominador"></sub>'
        enteros=Math.floor(res)
        document.getElementById("repreEntero").innerHTML=enteros
        numeradorres=numerador-(Math.floor(res)*denominador)
        document.getElementById("rreprenumerador").innerHTML=numeradorres
        document.getElementById("rrepredenominador").innerHTML=denominador
        document.getElementById("repreExplicacion").innerHTML="La fraccion dada en decimal son "+res+", quedando la fraccion de la siguiente forma"
        console.log("El numerador es mayor", Math.trunc(res))
        dibujarPastel(numeradorres,denominador)

    }else{
        document.getElementById("repreEntero").innerHTML=""
        document.getElementById("rreprenumerador").innerHTML=parseInt(numerador)
        document.getElementById("rrepredenominador").innerHTML=parseInt(denominador)
        document.getElementById("repreExplicacion").innerHTML="Numerador es el color rojo "+numerador+" y el complemento o sobrante para hacer "+denominador+" es el azul"
        console.log("El denominador es mayor que el numerador")
        dibujarPastel(numerador,denominador)

    }

}
function dibujarPastel(numerador, denominador){
    /**
     * Clase para generar graficos de pastel
     * Tiene que recibir:
     *	el id del canvas
     *	la anchura y altura del canvas
     *	un array con los valores a mostrar del tipo:
     *		var valores={
     *			"Access":	{valor:10,color:"blue"},
     *			"PHP":		{valor:23,color:"red"},
     *			"Python":	{valor:18,color:"green"},
     *			".NET":		{valor:12,color:"Orange"},
     *			"C++":		{valor:30,color:"Cyan"}
     *		}
     */
    var miPastel=function(canvasId,width,height,valores) {
        this.canvas=document.getElementById(canvasId);;
        this.canvas.width=width;
        this.canvas.height=height;
        this.radio=Math.min(this.canvas.width/2,this.canvas.height/2)
        this.context=this.canvas.getContext("2d");
        this.valores=valores;
        this.tamanoDonut=0;
     
        /**
         * Dibuja un gráfico de pastel
         */

        this.dibujar=function() {
            this.total=this.getTotal();
            var valor=0;
            var inicioAngulo=0;
            var angulo=0;
     
            // creamos los quesos del pastel
            for(var i in this.valores)
            {
                valor=valores[i]["valor"];
                color=valores[i]["color"];
                angulo=2*Math.PI*valor/this.total;
     
                this.context.fillStyle=color;
                this.context.beginPath();
                this.context.moveTo(this.canvas.width/2, this.canvas.height/2);
                this.context.arc(this.canvas.width/2, this.canvas.height/2, this.radio, inicioAngulo, (inicioAngulo+angulo));
                this.context.closePath();
                this.context.fill();
                inicioAngulo+=angulo;
            }
        }
     
        /**
         * Dibuja un gráfico de pastel con una redonda en medio en modo de donut
         * Tiene que recibir:
         *	el tamaño de la redonda central (0 no hay redonda - 1 es todo)
         *	el color de la redonda
         */
        this.dibujarDonut=function(tamano,color) {
            this.tamanoDonut=tamano;
            this.dibujar();
     
            // creamos un circulo del color recibido en medio
            this.context.fillStyle=color;
            this.context.beginPath();
            this.context.moveTo(this.canvas.width/2, this.canvas.height/2);
            this.context.arc(this.canvas.width/2, this.canvas.height/2, this.radio*tamano, 0, 2*Math.PI);
            this.context.closePath();
            this.context.fill();
        }
     
        /**
         * Pone el tanto por ciento de cada uno de los valores
         * Tiene que recibir:
         *	el color del texto
         */
        this.ponerPorCiento=function(color){
            var valor=0;
            var etiquetaX=0;
            var etiquetaY=0;
            var inicioAngulo=0;
            var angulo=0;
            var texto="";
            var incrementar=0;
     
            // si hemos dibujado un donut, tenemos que incrementar el valor del radio
            // para que quede centrado
            if(this.tamanoDonut)
                incrementar=(this.radio*this.tamanoDonut)/2;
     
            this.context.font="bold 12pt Calibri";
            this.context.fillStyle=color;
            for(var i in this.valores)
            {
                valor=valores[i]["valor"];
                angulo=2*Math.PI*valor/this.total;
     
                // calculamos la posición del texto
                etiquetaX=this.canvas.width/2+(incrementar+this.radio/2)*Math.cos(inicioAngulo+angulo/2);
                etiquetaY=this.canvas.height/2+(incrementar+this.radio/2)*Math.sin(inicioAngulo+angulo/2);
     
                // texto=Math.round(100*valor/this.total);
                texto=valor;






     
                // movemos la posición unos pixels si estamos en la parte izquierda
                // del pastel para que quede mas centrado
                if(etiquetaX<this.canvas.width/2)
                    etiquetaX-=10;
     
                // ponemos los valores
                this.context.beginPath();
                // this.context.fillText(texto+"%", etiquetaX, etiquetaY);
                this.context.fillText(texto, etiquetaX, etiquetaY);
                this.context.stroke();
     
                inicioAngulo+=angulo;
            }
        }
     
        /**
         * Function que devuelve la suma del total de los valores recibidos en el array
         */
        this.getTotal=function() {
            var total=0;
            for(var i in this.valores)
            {
                total+=valores[i]["valor"];
                // total=parseInt(document.getElementById("repredenominador").value)

            }
            return total;
        }
     
        /**
         * Función que devuelve una lista (<ul><li>) con la leyenda
         * Tiene que recibir el id donde poner la leyenda
         */
        this.ponerLeyenda=function(leyendaId) {
            var codigoHTML="<ul class='leyenda'>";
     
            for(var i in this.valores)
            {
                codigoHTML+="<li><span style='background-color:"+valores[i]["color"]+"'></span>"+i+"</li>";
            }
            codigoHTML+="</ul>";
            document.getElementById(leyendaId).innerHTML=codigoHTML;
        }
    }
     
    // definimos los valores de nuestra gráfica
    // var valores={
    //     "Access":{valor:10,color:"blue"},
    //     "PHP":{valor:23,color:"red"},
    //     "Python":{valor:18,color:"green"},
    //     ".NET":{valor:12,color:"Orange"},
    //     "C++":{valor:30,color:"Cyan"}
    // }

    // let x=document.getElementById("reprenumerador").value
    // let y=document.getElementById("repredenominador").value
    let x=numerador
    let y=denominador
    let sobrante=1-x/y
    let fraccion=x/y
    console.log("sobrante",sobrante,"fraccion",fraccion, x, y)
    var valores={
        // "Access":{valor:10,color:"blue"},
        // "PHP":{valor:20,color:"red"}

        "parte tomada(numerador)":{valor:sobrante,color:"blue"},
        "parte restante":{valor:fraccion,color:"red"}
    }
     
    // generamos el primer pastel
    var pastel=new miPastel("canvas1",300,300,valores);
    pastel.dibujar();
    pastel.ponerPorCiento("white");
    pastel.ponerLeyenda("leyenda1");
     
    // generamos el segundo pastel
    var pastel=new miPastel("canvas2",300,300,valores);
    pastel.dibujarDonut(0.5,"white");
    pastel.ponerPorCiento("white");
    pastel.ponerLeyenda("leyenda2");
     }

     function representarfraccion(){
         let entero=document.getElementById("entero").value;
         let numerador=document.getElementById("mixtonumerador").value;
         let denominador=document.getElementById("mixtodenominador").value;

         resnumerador=(parseInt(entero)*parseInt(denominador))+parseInt(numerador)
         resdenominador=denominador
         desarrollo= '<sup><label>'+numerador+'+('+entero+')('+denominador+') </label></sup> / <sub><label>('+denominador+')('+entero+')</label> </sub>'
         explicacion='<h4>Pasos</h4>1-Se multiplica denominador '+denominador+' por el numero entero '+entero+' y se suma con el valor del numerador '+numerador+' el resultado se deja en el numerador<br>2-En el denominador se conserva el valor que manejaba anteriormente '+denominador
        desarrollofinal='<sup><label>'+resnumerador+' </label></sup> / <sub><label>'+denominador+'</label> </sub>'
         // desarrollo='Hola a todos'
         document.getElementById("rmixtonumerador").innerHTML=resnumerador
         document.getElementById("rmixtodenominador").innerHTML=resdenominador
         document.getElementById("mixDesarrollo").innerHTML='='+desarrollo+'='+desarrollofinal+explicacion
     }


     function convertirdecimal(){
         let numerador=parseInt(document.getElementById("convnumerador").value)
         let denominador=parseInt(document.getElementById("convdenominador").value)
         res=numerador/denominador
         document.getElementById("convExplicacion").innerHTML=res+" Es la equivalencia con punto decimal"

     }

     function simplificar(){
        let numerador=parseInt(document.getElementById("simnumerador").value)
        let denominador=parseInt(document.getElementById("simdenominador").value)
            
        
     }

     //////////////////////////////////////////////

    function EuclidesMCD() {
    a=document.getElementById("simnumerador").value
    b=document.getElementById("simdenominador").value
    var iaux; //auxiliar
    a = Math.abs(a); //tomamos valor absoluto
    b = Math.abs(b);
    var i1 = Math.max(a, b); //i1 = el más grande
    var i2 = Math.min(a, b); //i2 = el más pequeño

    do {
        iaux = i2; //guardar divisor
        i2 = i1 % i2; //resto pasa a divisor
        i1 = iaux; //divisor pasa a dividendo
    } while (i2 !== 0);
    // document.getElementById("rMCD").innerHTML=i1
    rnumerador=a/parseInt(i1)
    rdenominador=b/parseInt(i1)
    document.getElementById("rsimnumerador").innerHTML=rnumerador
    document.getElementById("rsimdenominador").innerHTML=rdenominador
    document.getElementById("simExplicacion").innerHTML="tiene un Maximo comun divisor que es "+i1+" quedando como resultado "
    return i1; //ultimo resto no nulo
    }

     //////////////////////////////////////////////
     function Amplificar(){
         let amplificador=parseInt(document.getElementById("amp").value)
         let numerador=parseInt(document.getElementById("ampnumerador").value)
         let denominador=parseInt(document.getElementById("ampdenominador").value)

        // explicaciondenominador='('+denominador1+')('+denominador2+')'
        desarrollo='<sup><label type="number" id="ampnumerador" >('+numerador+")("+amplificador+')</label></sup> / <sub> <label type="number" id="ampdenominador">('+denominador+')('+amplificador+')</label> </sub>'
        // desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
         explicacion="<h4>Pasos</h4>1- Seleccionar el numero por que quieres amplificar tu fraccion <br>2- Multiplicar el amplificador por el numerador <br>3- Multiplicar el amplificador por el numerador "
         desarrollofinal='<sup><label type="number" id="ampnumerador" >'+numerador*amplificador+'</label></sup> / <sub> <label type="number" id="ampdenominador">'+denominador*amplificador+'</label> </sub>'
         document.getElementById("rampExplicacion").innerHTML="="+desarrollo+"="+desarrollofinal+explicacion
        
     }
      
