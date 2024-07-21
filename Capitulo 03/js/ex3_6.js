function saque() {
    var inValor = document.getElementById("inValor");
    var outNota100 = document.getElementById("outNota100");
    var outNota50 = document.getElementById("outNota50");
    var outNota10 = document.getElementById("outNota10");

    outNota100.textContent = "";
    outNota50.textContent = "";
    outNota10.textContent = "";

    var valor = Number(inValor.value);

    if(valor== 0 || isNaN(valor)) {
        alert("Insira corretamente o valor.");
        inValor.value = "";
        inValor.focus();
        return;
    }

    if(valor%10 != 0) {
        alert("Valor inválido para notas disponíveis (10, 50, 100).");
        inValor.value = "";
        inValor.focus();
        return;
    }

    if(valor>=100) {
        var notas100 = Math.floor(valor/100);
        outNota100.textContent = "Notas de R$100: "+notas100;
        valor%=100;
    }

    if(valor>=50) {
        var notas50 = Math.floor(valor/50);
        outNota50.textContent = "Notas de R$50: "+notas50;
        valor%=50;
    } 

    if(valor>=10) {
        var notas10 = Math.floor(valor/10);
        outNota10.textContent = "Notas de R$10: "+notas10;
    } 
}
var btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", saque);