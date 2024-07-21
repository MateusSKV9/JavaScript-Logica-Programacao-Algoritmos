function depositar() {
    var inValor = document.getElementById("inValor");
    var outTempo = document.getElementById("outTempo");
    var outTroco = document.getElementById("outTroco");

    var valor = Number(inValor.value);
    var troco;
    var tempo;
    
    outTempo.textContent = "";
    outTroco.textContent = "";
    
    if(inValor.value == "" || isNaN(valor)) {
        alert("Insira um valor válido.");
        inValor.value = "";
        inValor.focus();
        return;
    }


    if(valor<1) {
        outTempo.textContent = "Tempo insuficiente";
    } else {
        if(valor>=1 && valor<1.75) {
            troco = valor - 1;
            tempo = 30;
        } else if(valor<3) {
            troco = valor - 1.75;
            tempo = 60;
        } else {
            troco = valor - 3;
            tempo = 120;
        } 
        
        outTempo.textContent = "Tempo: "+tempo+" min";
        if(troco!==0) {
            outTroco.textContent = "Troco: R$"+troco.toFixed(2);
        }
    }
}
var btnDepositar = document.getElementById("btnDepositar");
btnDepositar.addEventListener("click", depositar);