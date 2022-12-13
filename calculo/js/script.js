function calcular(){
    var massa = parseFloat(document.getElementById("massa").value.replace(",","."));
    var volume = parseFloat(document.getElementById("volume").value.replace(",","."));
    var resultado = "";

    if (isNaN(massa) || isNaN(volume)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado = "Massa específica (&rho;) = " + (massa/volume).toFixed(2) + " [kg/m³]";
    }
    return document.getElementById("resultado").innerHTML = resultado;
}