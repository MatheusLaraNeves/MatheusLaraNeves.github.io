function calcular(){
    var peso = parseFloat(document.getElementById("peso").value.replace(",","."));
    var volume = parseFloat(document.getElementById("volume").value.replace(",","."));
    var resultado = "";

    if (isNaN(peso) || isNaN(volume)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado = "Peso específico (&gamma;) = " + (peso/volume).toFixed(2) + " [kgf/m³]";
    }
    return document.getElementById("resultado").innerHTML = resultado;
}