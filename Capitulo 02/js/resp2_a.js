function mostrarPromocao() {
    var inMedicamento = document.getElementById("inMedicamento");
    var inPreco = document.getElementById("inPreco");
    var outMedicamento = document.getElementById("outMedicamento");
    var outPrecoMedicamento = document.getElementById("outPrecoMedicamento");

    var medicamento = inMedicamento.value;
    var preco = Number(inPreco.value);
    var total = preco*2 - (preco*2)%1;
    
    outMedicamento.textContent = "Promoção de " + medicamento;
    outPrecoMedicamento.textContent = "Leve 2 por apenas R$: " + total.toFixed(2);
}
var btnPromocao = document.getElementById("btnPromocao");
btnPromocao.addEventListener("click", mostrarPromocao);