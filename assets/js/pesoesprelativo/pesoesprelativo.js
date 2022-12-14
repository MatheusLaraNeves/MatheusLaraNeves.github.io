function calcular(){
    var peso = parseFloat(document.getElementById("peso").value.replace(",","."));
    var volume = 1000;
    var resultado = "";

    if (isNaN(peso) || isNaN(volume)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado = "Peso Relativo específico (&gamma;r) = " + (peso/volume).toFixed(3);
    }
    return document.getElementById("resultado").innerHTML = resultado;
}