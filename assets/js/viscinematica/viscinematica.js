function calcular(){
    var visdinamica = parseFloat(document.getElementById("visdinamica").value.replace(",","."));
    var massaespecifica = parseFloat(document.getElementById("massaespecifica").value.replace(",","."));
    var resultado = "";

    if (isNaN(visdinamica) || isNaN(massaespecifica)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado = "Viscosidade cinemática (v) = " + (visdinamica/massaespecifica).toFixed(2) + " [m²/s]";
    }
    return document.getElementById("resultado").innerHTML = resultado;
}