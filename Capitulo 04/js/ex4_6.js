function verificarNumero() {
    var temDivisor = 0;

    var inNumero = document.getElementById('inNumero');
    var outResposta = document.getElementById('outResposta');

    var numero = Number(inNumero.value);

    if(inNumero.value == '' || isNaN(numero)) {
        alert('Preencha o campo com um valor numérico.');
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    for(var i = 2; i<=(numero/2); i++) {
        if(numero%i == 0) {
            temDivisor=1;
            break;
        }
    }

    if(numero>1 && temDivisor==0) {
        outResposta.textContent = numero+' é primo';
    } else {
        outResposta.textContent = numero+' não é primo';
    }

    inNumero.value = '';
    inNumero.focus();
}
var btnVerificar = document.getElementById('btnVerificar');
btnVerificar.addEventListener('click', verificarNumero)