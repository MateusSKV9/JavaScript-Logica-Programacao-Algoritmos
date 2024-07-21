function verificarTriangulo() {
    var inLadoA = document.getElementById("inLadoA");
    var inLadoB = document.getElementById("inLadoB");
    var inLadoC = document.getElementById("inLadoC");
    var outResposta = document.getElementById("outResposta");
    var outTipo = document.getElementById("outTipo");

    var ladoA = Number(inLadoA.value);
    var ladoB = Number(inLadoB.value);
    var ladoC = Number(inLadoC.value);


    if(
        (ladoA <= 0 || isNaN(ladoA)) ||
        (ladoB <= 0 || isNaN(ladoB)) || 
        (ladoC <= 0 || isNaN(ladoC))
    ) {
        alert("Insira todos os lados do triangulo corretamente.");
        inLadoA.focus();
        return; 
    }

    outResposta.textContent = "";
    outTipo.textContent = "";

    if((ladoA<(ladoB+ladoC)) && (ladoB<(ladoA+ladoC)) && (ladoC<(ladoA+ladoB))) {
        outResposta.textContent = "Os lados podem formar um triângulo";

        if(ladoA==ladoB && ladoA==ladoC && ladoB==ladoC) {
            outTipo.textContent = "Tipo: Equilátero";
        } else if(ladoA==ladoB || ladoA==ladoC || ladoB==ladoC) {
            outTipo.textContent = "Tipo: Isósceles";
        } else {
            outTipo.textContent = "Tipo: Escaleno";
        }
    } else {
        outResposta.textContent = "Os lados não podem formar um triângulo";
    }
}
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificarTriangulo);