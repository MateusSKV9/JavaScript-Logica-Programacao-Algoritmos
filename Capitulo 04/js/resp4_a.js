function repetirFruta() {
    var inFruta = document.getElementById('inFruta');
    var inNumero = document.getElementById('inNumero');
    var outFruta = document.getElementById('outFruta');

    var fruta = inFruta.value;
    var numero = Number(inNumero.value);

    if(fruta=='' || inNumero.value=='' || isNaN(numero)) {
        alert('Preencha os campos corretamente.');
        inFruta.focus();
        return;
    }

    outFruta.textContent = '';

    for(var i = 1; i<numero; i++) {
        outFruta.textContent += fruta+' * ';
    }
    outFruta.textContent += fruta;
}
var btnRepetir = document.getElementById('btnRepetir');
btnRepetir.addEventListener('click', repetirFruta);