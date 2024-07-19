function verPromocao() {
    var inProduto = document.getElementById("inProduto");
    var inPreco= document.getElementById("inPreco");
    var outProduto = document.getElementById("outProduto");
    var outPreco = document.getElementById("outPreco");

    var produto = inProduto.value;
    var preco = Number(inPreco.value);

    var novoPreco = 0.50*preco;
    var total = 2*preco + novoPreco;

    outProduto.textContent = "Escova dental - promoção: leve 3 "+produto+" por R$: "+total.toFixed(2);
    outPreco.textContent = "O 3º produto custa apenas R$: "+novoPreco.toFixed(2);
}
var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", verPromocao);