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