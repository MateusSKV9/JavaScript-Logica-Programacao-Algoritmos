function calcularValor() {
    var inValor = document.getElementById("inValor");
    var inTempo = document.getElementById("inTempo");
    var outExibir = document.getElementById("outExibir");

    var valor = Number(inValor.value);
    var tempo = Number(inTempo.value);

    var total = (Math.ceil(tempo/15))*valor;

    outExibir.textContent = "Valor a pagar R$: "+ total.toFixed(2);
}
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularValor);