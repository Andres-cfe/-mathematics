// Pagina de operaciones
<<<<<<< HEAD


function multiplicar(num1, num2){
    resultado=num1*num2
    return resultado
}

function dividir(num1,num2){
    resultado=num1/num2
    return resultado
}
=======
function sumar(numerador1,denominador1, numerador2, denominador2 ){
    let resultadoNumerador=0
    let resultadoDenominador=0
    if(denominador1==denominador2){
        resultadoNumerador=numerador1 + numerador2
        resultadoDenominador=denominador1 + denominador2
    }
    else{
        resultadoNumerador1=numerador1 * denominador2
        resultadoNumerador2=numerador2 * denominador1
        resultadoDenominador=denominador1*denominador2
        resresNumerador=resultadoNumerador1 + resultadoNumerador2
    }
    return resresNumerador, resultadoDenominador 
}

function restar(numerador1,denominador1, numerador2, denominador2 ){
    let resultadoNumerador=0
    let resultadoDenominador=0
    if(denominador1==denominador2){
        resultadoNumerador=numerador1 + numerador2
        resultadoDenominador=denominador1 + denominador2
    }
    else{
        resultadoNumerador1=numerador1 * denominador2
        resultadoNumerador2=numerador2 * denominador1
        resultadoDenominador=denominador1*denominador2
        resresNumerador=resultadoNumerador1 - resultadoNumerador2
    }
    return resresNumerador, resultadoDenominador 
}

function multiplicar(numerador1,denominador1, numerador2, denominador2 ){
    let resultadoNumerador=0
    let resultadoDenominador=0
    resultadoNumerador=numerador1 * numerador2
    resultadoDenominador=denominador1 * denominador2
    return resultadoNumerador, resultadoDenominador
}

function dividir(numerador1,denominador1, numerador2, denominador2 ){
    let resultadoNumerador=0
    let resultadoDenominador=0
    resultadoNumerador=numerador1 * denominador2
    resultadoDenominador=numerador2 * denominador1
    return resultadoNumerador, resultadoDenominador
}


function representar(numerador1, denominador1){
    return numerador1, denominador1
}

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

>>>>>>> pruebas
