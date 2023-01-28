function calcular(){
    var velmedia = parseFloat(document.getElementById("velmedia").value.replace(",","."));
    var diametro = parseFloat(document.getElementById("diametro").value.replace(",","."));
    var viscosidade = parseFloat(document.getElementById("viscosidade").value.replace(",","."));
    var resultado = "";
    var tipo = "";

    if (isNaN(velmedia) || isNaN(diametro) || isNaN(viscosidade)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado =  ((velmedia * diametro)/viscosidade).toFixed(2);
    }
    if (resultado < 2000){
        tipo = "Regime laminar"

    } else if (resultado > 4000){
        tipo = "Regime turbulento"
    } else {
        tipo = "Zona de transição"
    }
    return [document.getElementById("resultado").innerHTML = "Regime de escoamento (Rey) = " + resultado, document.getElementById("tipo_de_regime").innerHTML = tipo];
}