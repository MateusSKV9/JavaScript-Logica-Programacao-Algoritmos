function tabuada() {
    var inNumero = document.getElementById('inNumero');
    var outTabuada = document.getElementById('outTabuada');

    var numero = Number(inNumero.value);

    if(inNumero.value == '' || isNaN(numero)) {
        alert('Insira um valor numérico.');
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    for(var i = 0; i<=10; i++) {
        outTabuada.textContent += numero+' x '+i+' = '+(numero*i)+'\n';
    }
}
var btnTabuada = document.getElementById('btnTabuada');
btnTabuada.addEventListener('click', tabuada);