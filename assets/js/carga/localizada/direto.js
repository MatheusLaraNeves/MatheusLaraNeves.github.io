function calcular(){
    var k = parseFloat(document.getElementById("coefk").value.replace(",","."));
    var velmedia = parseFloat(document.getElementById("velmedia").value.replace(",","."));
    var resultado = "";

    if (isNaN(k) || isNaN(velmedia)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado = "Perda de carga localizada = " + (k*(velmedia*velmedia)/(2*9.8)).toFixed(2);
    }
    return document.getElementById("resultado").innerHTML = resultado;
}