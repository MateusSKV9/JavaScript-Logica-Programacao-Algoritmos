function verificarNumero() {
    var inNumero = document.getElementById('inNumero');
    var outDivisores = document.getElementById('outDivisores');
    var outResposta = document.getElementById('outResposta');

    var numero = Number(inNumero.value);
    var somaDivs = 1;

    if(numero==0 || isNaN(numero)) {
        alert('Insira um valor numérico.');
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    outDivisores.textContent = '';
    outResposta.textContent = '';

    var resposta = 'Divisores do '+numero+": 1";
    
    for(var i = 2; i<=(numero/2); i++) {
        if(numero%i==0) {
            somaDivs+=i;
            resposta += ', '+i;
        }
    }
    resposta += ' (Soma: '+somaDivs+')';
   
    outDivisores.textContent = resposta;
    if(somaDivs==numero) {
        outResposta.textContent = numero+' é um número perfeito';
    } else {
        outResposta.textContent = numero+' não é um número perfeito';
    }
    inNumero.focus();
}
var btnVerificar = document.getElementById('btnVerificar');
btnVerificar.addEventListener('click', verificarNumero);