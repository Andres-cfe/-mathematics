function parentesis(){
    a=parseInt((Math.random()*10).toFixed())
    b=(Math.random()*10).toFixed()
    c=(Math.random()*10).toFixed()
    resultado=parseInt(b)+parseInt(c)
    desarrollo='Se tiene el siguiente ejemplo<br>'+a+'('+b+' + '+c+')<br>'

    desarrollo2='Se desarrolla primero lo que se encuentra dentro de los parentesis en este caso <br>'+a+'('+b+' + '+c+') = '+a+'('+resultado+')<br>'
    desarrollo3='Una vez desarrollado lo que esta dentro del parentesis se realiza lo que esta fuera de el<br>'+a+'*'+resultado+'='+a*(resultado)+'<br>'
    document.getElementById("jerarquia").innerHTML=desarrollo+desarrollo2+desarrollo3
}

function potencias(){
    a=(Math.random()*10).toFixed()
    b=(Math.random()*10).toFixed()
    c=(Math.random()*2).toFixed()
    d=(Math.random()*10).toFixed()
    e=(Math.random()*10).toFixed()
    // resultado=a+b*Math.pow(c,d)
    resultado2=parseInt(a)+parseInt(b*Math.pow(c,d))
    desarrollo='Se tiene la siguiente expresion <br>('+a+' + '+b+' * '+c+'<sup>'+d+'</sup>)<br>'
    desarrollo2='Primero se resuelve la parte que tiene el exponente '+c+' a la '+d+'<br>'+a+'+'+b+'*'+Math.pow(c,d)+'<br>'
    desarrollo3='Una vez resuelta expoencial se procede a resolver lo que sigue en la jerarquia que son las multiplicaciones <br>'+a+'+'+b*Math.pow(c,d)+'<br>'
    desarrollo4='Por ultimo se resuelven las sumas o restas en este caso sumas<br>'+resultado2+'<br>'
    document.getElementById("jerarquia").innerHTML=desarrollo+desarrollo2+desarrollo3+desarrollo4


}

function multiplicaciones(){
    a=(Math.random()*10).toFixed()
    b=(Math.random()*10).toFixed()
    c=(Math.random()*10).toFixed()
    d=(Math.random()*10).toFixed()
    e=(Math.random()*10).toFixed()
    // resultado=a+b*Math.pow(c,d)
    resultado=parseInt(a)+parseInt(b)*c+parseInt(d)
    // resultado2=parseInt(a)+parseInt(b*Math.pow(c,d))
    desarrollo='Se tiene la siguiente expresion <br>'+a+'+'+b+' * '+c+'+'+d+'<br>'
    desarrollo2='Primero se resuelve la parte que tiene la multiplicacion o division <br>'+a+'+'+b+' * '+c+' + '+d+' = '+a+' + '+b*c+' + '+d+'<br>'
    desarrollo3='Una vez resuelta la multiplicacion se procede a resolver lo que sigue en la jerarquia quedando como resultado: <br>'+resultado+'<br>'
    document.getElementById("jerarquia").innerHTML=desarrollo+desarrollo2+desarrollo3


}

function sumas(){
    a=(Math.random()*10).toFixed()
    b=(Math.random()*10).toFixed()
    c=(Math.random()*10).toFixed()
    d=(Math.random()*10).toFixed()
    e=(Math.random()*10).toFixed()

    resultado=parseInt(a)-parseInt(b)-parseInt(c)+parseInt(d)

    desarrollo='Se tiene la siguiente expresion <br>'+a+' - '+b+' - '+c+' + '+d+'<br>'
    desarrollo2='Como se tiene operadores de la misma jerarquia se procede a resolver directamente<br>'+a+' - '+b+' - '+c+' + '+d+'='+resultado+'<br>'
    document.getElementById("jerarquia").innerHTML=desarrollo+desarrollo2

}