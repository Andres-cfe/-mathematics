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
    }
    else{
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
    // document.getElementById('resultadodenominadorexplicacion').innerHTML=resultadoDenominador;

    // const data = document.getElementById("Explicacion");
    // data.innerHTML = "";
    // data.innerHTML="<h1>Tema 2</h1>";

    // data.textContent;   // "Tema 1"
    // data.innerHTML;     // "<h1>Tema 1</h1>"
    // data.outerHTML;     // "<div class="data"><h1>Tema 1</h1></div>"

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

     function comparar(){
         let numerador1=parseInt(document.getElementById("compnumerador1").value)
         let numerador2=parseInt(document.getElementById("compnumerador2").value)
         let denominador1=parseInt(document.getElementById("compdenominador1").value)
         let denominador2=parseInt(document.getElementById("compdenominador2").value)
         let comparacion=document.getElementById("comp").value
         ter1=numerador1*denominador2
         ter2=numerador2*denominador1
         
         switch(comparacion){

            case '>':
                if(ter1>ter2){
                    mensaje="Es correcto"
                }else if(ter1==ter2){
                    mensaje="Las fracciones equivalen lo mismo"
                }else{
                    mensaje="La comparacion es incorrecta"
                }
                explicacionnumerador='('+numerador1+')('+denominador2+')'+comparacion+' ('+numerador2+')('+denominador1+')';
                // explicaciondenominador='('+denominador1+')('+denominador2+')'
                desarrollo="("+ter1+")"+comparacion+"("+ter2+")"
                desarrollointer=""
                desarrollofinal=""
                desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
                explicacion="<h4>Pasos</h4>1- Multiplicar numerador del primer termino por el denominador del segundo termino y se deja como primer termino <br>2-Multiplicar denominador del segundo termino por el numerador del primer termino y se deja como segundo termino<br>3- Se hace una comparacion entre los terminos y se observa que se cumpla la condicion"
 
                document.getElementById("compExplicacion").innerHTML=mensaje
                document.getElementById("compdesarrollo").innerHTML=explicacionnumerador+"="+desarrollo+"="+mensaje+explicacion+"="+mensaje
                
                // document.getElementById("comdesarrollo").innerHTML=desarrollo

                // console.log("Entro en el case")
                break;
            case '<':
                if(ter1<ter2){
                    mensaje="Es correcto"
                }else if(ter1==ter2){
                    mensaje="Las fracciones equivalen lo mismo"
                }else{
                    mensaje="La comparacion es incorrecta"
                }
                explicacionnumerador='('+numerador1+')('+denominador2+')'+comparacion+' ('+numerador2+')('+denominador1+')';
                // explicaciondenominador='('+denominador1+')('+denominador2+')'
                desarrollo="("+ter1+")"+comparacion+"("+ter2+")"
                desarrollointer=""
                desarrollofinal=""
                desarrollointegrada=desarrollo+""+desarrollointer+" = "+desarrollofinal
                explicacion="<h4>Pasos</h4>1- Multiplicar numerador del primer termino por el denominador del segundo termino y se deja como primer termino <br>2-Multiplicar denominador del segundo termino por el numerador del primer termino y se deja como segundo termino<br>3- Se hace una comparacion entre los terminos y se observa que se cumpla la condicion"
 
                document.getElementById("compExplicacion").innerHTML=mensaje
                document.getElementById("compdesarrollo").innerHTML=explicacionnumerador+"="+desarrollo+"="+mensaje+explicacion
                
                break;
            case '=':
                if(ter1==ter2){
                    document.getElementById("compExplicacion").innerHTML="Es correcto"
                }else{
                    document.getElementById("compExplicacion").innerHTML="No son equivalentes "+ter1+" y "+ter2

                }
                break;
                
            default:
                document.getElementById("compExplicacion").innerHTML="Ingreso un caracter erroneo"
                console.log("No entro en el caso",ter1,ter2,comparacion)

        }



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
      
