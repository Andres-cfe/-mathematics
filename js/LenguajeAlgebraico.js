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
        $('.sinonimos').show(300);
        var tipo = $(this).attr('data');
         var res = tipo.split('-');
        switch(tipo) {
          case 'variables':
            //titulo
            $('.descripcion .title').html('➤ Variables');
            variable();
            break;
          case 'suma':
            //titulo
            $('.descripcion .title').html('➤ Sumar');
            sumar();
            break;
          case 'resta':
            //titulo
            $('.descripcion .title').html('➤ Restar');
            restar();
            break;
          case 'multiplicar':
            //titulo
            $('.descripcion .title').html('➤ Multiplicar');
            multiplicar();
            break;
          case 'dividir':
            //titulo
            $('.descripcion .title').html('➤ Dividir');
            dividir();
            break;
          case 'igual':
            //titulo
            $('.descripcion .title').html('➤ Igual');
            igual();
            break;
          case 'elevar':
            //titulo
            $('.descripcion .title').html('➤ Elevar');
            elevar();
            break;
          case 'diccionario':
            //titulo
            $('.descripcion .title').html('➤ Diccionario algebraico');
             dicccionario();
            break;
          default:
            // code block
        }        

    });

    //-----------------------------------------------------
    //--------  BOTON REGRESAR A MENU ANTERIOR  -------------
    //-----------------------------------------------------
    $("#btn-regresar").click(function(){

        $('.dashboard').show(300);
        $('.descripcion').hide(300);
        $('.sinonimos').hide(300);
        $('.diccionario').hide(300);
        $('.table-sinonimos').hide(300);
    });

    //-----------------------------------------------------
    //-------------------  OPERACIONES --------------------
    //-----------------------------------------------------
    function variable(){
        $('.table-sinonimos').hide();
        $('.example').html(
            '<p>Variable <b>A</b> mas variable <b>B</b> es igual a <b>C</b> <br>Se representa de la siguiente forma:</p>'+
            '<h4>A + B = C </h4>'+
            ' Donde <b>A, B</b> y <b>C</b> son las variables o numeros desconocidos </p>'
            );
    }



    function sumar(){
        $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        var sinonimos = ['Más', 'Aumentar', 'Adición', 'Más grande que', 'Mayor que', 'Ganar'];

        for (var i = 0; i < sinonimos.length; i++) {
            var row = '<tr><td>'+sinonimos[i]+'</td></tr>';
            $('.table-sinonimos tbody').append(row);
        }
        $('.example').html(
            '<p>Adicionar a X el valor de Y igual a W <br>Se representa de la siguiente forma</p>'+
            '<h4>X + Y = W </h4>'+
            ' Donde la palabra adicionar pudo haber sido cambiada por:<b> mas, ganar, mayor que o aumentar.</b></p>'
        );
        
    }

    function restar(){
        $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        var sinonimos = ['Sustracción', 'Diferencia', 'Menos', 'Disminuir', 'Menor que', 'Perder'];

        for (var i = 0; i < sinonimos.length; i++) {
            var row = '<tr><td>'+sinonimos[i]+'</td></tr>';
            $('.table-sinonimos tbody').append(row);
        }



        $('.example').html(
            '<p>A un número se le quita 8</p><p>Se representad de la siguiente forma:</p>'+
            '<h4>A - 8</h4>'+
            '<p>Donde A puede ser cualquier numero, la palabra sustraccion puede ser cambiada por menos, diferencia y sera el simbolo de resta (-) y ocho es la constante.</p>'
        );
    }


    function multiplicar(){
        $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        var sinonimos = ['Producto', 'Multiplicado', 'Veces', 'Doble', 'Triple', 'Cuadruple'];

        for (var i = 0; i < sinonimos.length; i++) {
            var row = '<tr><td>'+sinonimos[i]+'</td></tr>';
            $('.table-sinonimos tbody').append(row);
        }

       $('.example').html(
            '<p>El producto de un numero por su siguiente<br>Se representa de la siguiente forma:</p>'+
            '<h4>x(x+1)</h4>'+
            '<p>Donde x puede ser cualquier numero, la palabra producto puede ser cambiado por "multiplicado por" (*) y siguiente es el numero que le sigue por eso mas 1.</p>'
        );
    }


    function dividir(){
        $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        var sinonimos = ['Cociente', 'Dividido en', 'Mitad', 'Tercera', 'Razón', 'Entre'];

        for (var i = 0; i < sinonimos.length; i++) {
            var row = '<tr><td>'+sinonimos[i]+'</td></tr>';
            $('.table-sinonimos tbody').append(row);
        }

       $('.example').html(
            '<p>Un numero entre su cociente siguiente<br>Se representa de la siguiente forma:</p>'+
            '<h4>x/(x+1)</h4>'+
            '<p>Donde x puede ser cualquier numero, la palabra cociente puede ser cambiado por "entre, dividido, parte de, razon (/) y siguiente es el numero que le sigue por eso mas 1.</p>'
        );
    }


    function igual(){
               $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        var sinonimos = ['Es', 'Da como resultado', 'Tiene', 'Igual a', 'Igualdad'];

        for (var i = 0; i < sinonimos.length; i++) {
            var row = '<tr><td>'+sinonimos[i]+'</td></tr>';
            $('.table-sinonimos tbody').append(row);
        }

       $('.example').html(
            '<p>La suma de dos numeros da como resultado 20<br>Se representa de la siguiente forma:</p>'+
            '<h4>a + b = 20</h4>'+
            '<p>Donde a puede ser cualquier numero y b otro cualquier numero, la palabra "da como como resultado" se traduce como igual (=), y se puede usar, es, da como, igualdad.</p>'
        );
    }




    function elevar(){
        $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        var sinonimos = ['Es', 'Da como resultado', 'Tiene', 'Igual a', 'Igualdad'];

        for (var i = 0; i < sinonimos.length; i++) {
            var row = '<tr><td>'+sinonimos[i]+'</td></tr>';
            $('.table-sinonimos tbody').append(row);
        }

       $('.example').html(
            '<p>Elevar al cuadrado la diferencia de dos numeros<br>Se representa de la siguiente forma:</p>'+
            '<h4>(a - b )<sup>2</sup></h4>'+
            '<p>Donde a puede ser cualquier numero y b otro cualquier numero y diferencia se traduce como resta, la palabra "elevar al cuadrado" se traduce como exponente a la 2<br>Si se hubiera dicho al cubo seria exponente a la 3, a la cuarta seria exponente a la 4 y asi sucesivamente.</p>'
        );
    }





    function dicccionario(){
        $('.table-sinonimos').show();
        $('.table-sinonimos tbody').empty();
        $('.sinonimos').hide();
        $('.diccionario').show(300);
    }



    $(".btn-search").click(function(){
        $('.result-search').show(300);
        var busqueda = $('#search').val();
      if(busqueda == ''){
        alert();
        console.log('alerta');
      }else if(busqueda.length == 1){
        isNumber(busqueda);
      }else{
        console.log('buscar');
        buscar(busqueda);
      }
    });


    function alert(){
            $('.result-search').hide();
            $('.error').show(300);
    }

    function isNumber(val){
        if (isNaN(val)){
            buscarSimbolo(val);
        }else if(!isNaN(val)){
            console.log('es número');
            $('.sugerencia').html(val);
            $('.resultado').html('Un número es un concepto matemático que expresa cantidad. También consideramos que un número es el signo o conjunto de signos con que se representa este concepto.');
            $('.simbolo').html(val);
            $('.result-search table').hide();
        }else{
            $('.result-search').hide();
            $('.error').show(300);
        }
    }


    function buscar(val){

        var data = {val:val};

        $.ajax({
            type:'POST',
            data:data,
            url: 'site/controller/getSearch.php'
          }).done(function (data) {
            var _data = JSON.parse(data);
            if (_data.code == "1"){
                $('.result-search').show(300);
                $('.result-search table').show(300);
                $('.sugerencia').html(_data.datos[0].sinonimo);
                $('.resultado').html(_data.datos[0].resultado);
                $('.simbolo').html(_data.datos[0].simbolo);

                $('.result-search table tbody').empty();
                $.each(_data.sinonimos, function (index, val) {
                    var row = '<tr><td>'+(index+1)+'</td><td>'+val.sinonimo+'</td></tr>';
                    $('.result-search table tbody').append(row);
                });

            }else{
                isNumber(val);
            }
          })
          .fail(function () {

          })
          .always(function () {

           }); 
    }


    function buscarSimbolo(val){

        var data = {val:val};

        $.ajax({
            type:'POST',
            data:data,
            url: 'site/controller/getSearchSimbolo.php'
          }).done(function (data) {
            var _data = JSON.parse(data);
            if (_data.code == "1"){
                $('.result-search').show(300);
                $('.result-search table').show(300);
                $('.sugerencia').html(_data.datos[0].sinonimo);
                $('.resultado').html(_data.datos[0].resultado);
                $('.simbolo').html(_data.datos[0].simbolo);
                $('.result-search table tbody').empty();
                $.each(_data.sinonimos, function (index, val) {
                    var row = '<tr><td>'+(index+1)+'</td><td>'+val.sinonimo+'</td></tr>';
                    $('.result-search table tbody').append(row);
                });
            }else{
                $('.result-search').show(300);
                $('.sugerencia').html(val);
                $('.resultado').html('Una variable en matemática, es un símbolo que integra una fórmula o un algoritmo, que puede adoptar diferentes valores numéricos.');
                $('.simbolo').html(val);
                $('.result-search table').hide();
            }
          })
          .fail(function () {

          })
          .always(function () {

           }); 
    }


});
















function variable(){
    desarrollo='<h4>Palabras relacionadas</h4>Representa un numero desconocido, variable en una expresion o ecuacion, un numero (Puede usarse cualquier letra), A-Z, a-z'
    desarrollo2='<h4>Ejemplo</h4> Variable A mas variable B es igual a C <br>Se representa de la siguiente forma<br>'
    desarrollo3='A + B = C <br> Donde A, B y C son las variables o numeros desconocidos '
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
}
function sumar(){
    desarrollo='<h4>Palabras relacionadas</h4>Mas, aumentar, adicion, mas grande que, mayor que, ganar'
    desarrollo2='<h4>Ejemplo</h4> Adicionar a X el valor de Y igual a W <br>Se representa de la siguiente forma<br>'
    desarrollo3='X + Y = W <br> Donde la palabra adicionar pudo haber sido cambiada por, mas, ganar, mayor que o aumentar '
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
}
function restar(){
    desarrollo='<h4>Palabras relacionadas</h4>Sustraccion, diferencia, menos, disminuir, menor que, perder'
    desarrollo2='<h4>Ejemplo</h4> a un numero se le quita 8<br>Se representad de la siguiente forma<br>'
    desarrollo3='A - 8  <br> Donde A puede ser cualquier numero, la palabra sustraccion puede ser cambiada por menos, diferencia y sera el simbolo de resta (-) y ocho es la constante'
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
}
function multiplicar(){
    desarrollo='<h4>Palabras relacionadas</h4>Producto, multiplicado, veces, doble, triple, cuadruple'
    desarrollo2='<h4>Ejemplo</h4> El producto de un numero por su siguiente<br>Se representa de la siguiente forma<br>'
    desarrollo3='x(x+1)  <br>Donde x puede ser cualquier numero, la palabra producto puede ser cambiado por "multiplicado por" (*) y siguiente es el numero que le sigue por eso mas 1'
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
}
function dividir(){
    desarrollo='<h4>Palabras relacionadas</h4>cociente, dividido en, mitad, tercera, razon, entre'
    desarrollo2='<h4>Ejemplo</h4> Un numero entre su cociente siguiente<br>Se representa de la siguiente forma<br>'
    desarrollo3='x/(x+1)  <br>Donde x puede ser cualquier numero, la palabra cociente puede ser cambiado por "entre, dividido, parte de, razon (/) y siguiente es el numero que le sigue por eso mas 1'
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
}
function igual(){
    desarrollo='<h4>Palabras relacionadas</h4>es, da como resultado, tiene, igual a, igualdad'
    desarrollo2='<h4>Ejemplo</h4> La suma de dos numeros da como resultado 20<br>Se representa de la siguiente forma<br>'
    desarrollo3='a + b = 20  <br>Donde a puede ser cualquier numero y b otro cualquier numero, la palabra "da como como resultado" se traduce como igual (=), y se puede usar, es, da como, igualdad'
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
}
function elevar(){
    desarrollo='<h4>Palabras relacionadas</h4>al cuadrado, cubo, cuarta'
    desarrollo2='<h4>Ejemplo</h4> Elevar al cuadrado la diferencia de dos numeros<br>Se representa de la siguiente forma<br>'
    desarrollo3='(a - b )<sup>2</sup>  <br>Donde a puede ser cualquier numero y b otro cualquier numero y diferencia se traduce como resta, la palabra "elevar al cuadrado" se traduce como exponente a la 2<br>Si se hubiera dicho al cubo seria exponente a la 3, a la cuarta seria exponente a la 4 y asi sucesivamente<br>'
    document.getElementById("Definicion").innerHTML=desarrollo+desarrollo2+desarrollo3
    // document.getElementById("Definicion").innerHTML=desarrollo
}
function buscar(){
    palabra=document.getElementById("palabra").value
    sumas='Mas, aumentar, adicion, mas grande que, mayor que, ganar'
    variables='Representa un numero desconocido, variable en una expresion o ecuacion, un numero (Puede usarse cualquier letra), A-Z, a-z'
    resta='Sustraccion, diferencia, menos, disminuir, menor que, perder'
    multiplica='Producto, multiplicado, veces, doble, triple, cuadruple'
    igualdad='es, da como resultado, tiene, igual a, igualdad'
    exponente='al cuadrado, cubo, cuarta'
    accion='<h4>Accion a realizar</h4>'
    if((sumas.search(palabra))>1){
        document.getElementById("Definicion").innerHTML=accion+'Se suma (+)'
    
    }else if((variables.search(palabra))>1){
        document.getElementById("Definicion").innerHTML=accion+'Cualquier numero (Aa-Zz)'

    }else if((resta.search(palabra))>1){
        document.getElementById("Definicion").innerHTML=accion+'Se resta (-)'

    }else if((multiplica.search(palabra))>1){
        document.getElementById("Definicion").innerHTML=accion+'se multiplica (*)'
    }else if((igualdad.search(palabra))>1){
        document.getElementById("Definicion").innerHTML=accion+'se iguala (=)'
    }else if((exponente.search(palabra))>1){
        document.getElementById("Definicion").innerHTML=accion+'se eleva (^)'
    }else{
        document.getElementById("Definicion").innerHTML=accion+'No se encontro la palabra'
    }
}