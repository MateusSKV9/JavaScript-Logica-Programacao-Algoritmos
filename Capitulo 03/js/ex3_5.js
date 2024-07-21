function raizQuadrada() {
    var inNumero = document.getElementById("inNumero");
    var outRaizQuadrada = document.getElementById("outRaizQuadrada");

    var numero = Number(inNumero.value);

    if(inNumero.value == "" || isNaN(numero)) {
        alert("Insira um número corretamente.");
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    var raizQuadrada = numero**(1/2);

    if(raizQuadrada == Math.floor(raizQuadrada)) {
        outRaizQuadrada.textContent = "A raiz quadrada de "+numero+" é "+raizQuadrada;
    } else {
        outRaizQuadrada.textContent = "Não existe raiz quadrada para "+numero;
    }
}
var btnRaizQuadrada = document.getElementById("btnRaizQuadrada");
btnRaizQuadrada.addEventListener("click", raizQuadrada);