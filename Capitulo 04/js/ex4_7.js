function preencher() {
    var inNumero = document.getElementById('inNumero');
    var outSimbolos = document.getElementById('outSimbolos');

    var numero = Number(inNumero.value);
    
    if(numero<=1 || isNaN(numero)) {
        alert('Insira um valor válido.');
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    outSimbolos.textContent = '';

    for(var i = 1; i<=numero; i++) {
        if(i%2!=0) {
            outSimbolos.textContent += '*';
        } else {
            outSimbolos.textContent += '_';
        }
    }
}
var btnPreencher = document.getElementById('btnPreencher');
btnPreencher.addEventListener('click', preencher);