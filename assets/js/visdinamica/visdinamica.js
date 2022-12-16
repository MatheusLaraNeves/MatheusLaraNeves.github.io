function calcular(){
    var força = parseFloat(document.getElementById("força").value.replace(",","."));
    var tempo = parseFloat(document.getElementById("tempo").value.replace(",","."));
    var area = parseFloat(document.getElementById("area").value.replace(",","."));
    var resultado = "";

    if (isNaN(força) || isNaN(area) || isNaN(tempo)) {
        resultado = "Valor inserido é inválido! Por favor, insira um valor válido para continuar."
    } else {   
        resultado = "Viscosidade dinâmica (&mu;) = " + ((força*tempo)/area).toFixed(2) + " [Ns/m²]";
    }
    return document.getElementById("resultado").innerHTML = resultado;
}