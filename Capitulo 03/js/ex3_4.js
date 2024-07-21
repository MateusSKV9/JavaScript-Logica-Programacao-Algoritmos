function converterHora() {
    var inHoraBrasil = document.getElementById("inHoraBrasil");
    var outHoraFranca = document.getElementById("outHoraFranca");
    
    var horaBrasil = Number(inHoraBrasil.value);
    
    var horaFranca = horaBrasil+5;

    if(inHoraBrasil.value == "" || isNaN(horaBrasil)) {
        alert("Informe a hora no Brasil corretamente.");
        inHoraBrasil.value = "";
        inHoraBrasil.focus();
        return;
    }

    if(horaFranca>=24) {
        horaFranca-=24;
    }

    outHoraFranca.textContent = "Hora na França: "+horaFranca.toFixed(2);
}
var btnHora = document.getElementById("btnHora");
btnHora.addEventListener("click", converterHora);
