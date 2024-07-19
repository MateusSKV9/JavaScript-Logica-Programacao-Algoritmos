function verPromocao() {
    var inPreco = document.getElementById("inPreco");
    var inVeiculo = document.getElementById("inVeiculo");
    var outNome = document.getElementById("outNome");
    var outEntrada = document.getElementById("outEntrada");
    var outParcelas = document.getElementById("outParcelas");

    var preco = Number(inPreco.value);
    var veiculo = inVeiculo.value;
    var entrada = 0.50*preco;
    var parcela = (0.50*preco)/12;

    outNome.textContent = "Promoção: " + veiculo;
    outEntrada.textContent = "Entrada de R$: " + preco.toFixed(2);
    outParcelas.textContent = "+12x de R$: " + parcela.toFixed(2); 
}
var btnVerPromocao = document.getElementById("btnVerPromocao");
btnVerPromocao.addEventListener("click", verPromocao);