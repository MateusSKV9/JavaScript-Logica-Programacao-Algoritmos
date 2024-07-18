function calcularPreco() {
    var inValor = document.getElementById("inValor");
    var inConsumo = document.getElementById("inConsumo");
    var outExibir  = document.getElementById("outExibir");

    var valor = Number(inValor.value);
    var consumo = Number(inConsumo.value);
    var total = (consumo/1000)*valor;

    outExibir.textContent = "Valor a pagar R$: " + total.toFixed(2);
}
var btnCalcularPreco = document.getElementById("btnCalcular");
btnCalcularPreco.addEventListener("click", calcularPreco);