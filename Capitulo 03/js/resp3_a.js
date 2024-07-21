function verificicar() {
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var numero = Number(inNumero.value);

    if(inNumero.value == "" || isNaN(numero))  {
        alert("Insira um valor corretamente.");
        inNumero.value = "";
        inNumero.focus();
        return;
    }

    if(numero%2 == 0) {
        outResposta.textContent = "Resposta: "+numero+" é par!";
    } else {
        outResposta.textContent = "Resposta: "+numero+" é ímpar!";
    }
}
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificicar);