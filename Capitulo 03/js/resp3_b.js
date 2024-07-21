function verificarVelocidade() {
    var inSpeedPerm = document.getElementById("inSpeedPerm");
    var inSpeedCond = document.getElementById("inSpeedCond");
    var outResposta = document.getElementById("outResposta");

    var speedPermitida = Number(inSpeedPerm.value);
    var speedCondutor = Number(inSpeedCond.value);

    if(speedPermitida == "" || speedCondutor == "" || isNaN(speedPermitida) || isNaN(speedCondutor)) {
        alert("Preencha corretamente os campos.");
        inSpeedPerm.value = "";
        inSpeedCond.value = "";
        inSpeedPerm.focus();
        return;
    }

    if(speedCondutor <= speedPermitida) {
        outResposta.textContent = "Situação: Sem multa";
    } else if(speedCondutor <= 1.20*speedPermitida) {
        outResposta.textContent = "Situação: Multa leve";
    } else {
        outResposta.textContent = "Situação: Multa grave";
    }
}
var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificarVelocidade);