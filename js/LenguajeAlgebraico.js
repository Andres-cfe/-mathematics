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