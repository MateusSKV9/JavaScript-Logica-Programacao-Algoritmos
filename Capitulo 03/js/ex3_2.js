function calcularPesoIdeal() {
    var inNome = document.getElementById("inNome");
    var inMasculino = document.getElementById("inMasculino");
    var inFeminino = document.getElementById("inFeminino");
    var outPeso = document.getElementById("outPeso");
    var inAltura = document.getElementById("inAltura");

    var nome = inNome.value;
    var masculino = inMasculino.checked;
    var feminino = inFeminino.checked;
    var altura = Number(inAltura.value);

    if(nome == "" || (masculino == false && feminino == false)) {
        alert("Por favor, informe o nome e selecione o sexo.");
        inNome.focus();
        return;
    }

    if(altura == 0 || isNaN(altura)) {
        alert("Por favor, informe a altura corretamente.");
        inAltura.focus();
        return;
    }

    if(masculino) {
        var pesoIdeal = 22*(Math.pow(altura, 2));
    } else {
        var pesoIdeal = 21*(Math.pow(altura, 2))
    }

    outPeso.textContent = nome + ": seu peso ideal é "+pesoIdeal.toFixed(2)+" Kg";
}
var btnCalcularPeso = document.getElementById("btnCalcularPeso");
btnCalcularPeso.addEventListener("click", calcularPesoIdeal);

function LimparCampos() {
    // document.getElementById("inNome").value = "";
    // document.getElementById("inAltura").value = "";
    // document.getElementById("outPeso").textContent = "";
    // document.getElementById("inMasculino").checked = false;
    // document.getElementById("inFeminino").checked = false;
    location.reload();
    document.getElementById("inNome").focus();
}
var btnLimparCampso = document.getElementById("btnLimparCampos");
btnLimparCampso.addEventListener("click", LimparCampos)