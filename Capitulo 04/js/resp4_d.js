function criarEstrelas() {
    var inLinhas = document.getElementById('inLinhas');
    var outEstrelas = document.getElementById('outEstrelas');

    var linhas = Number(inLinhas.value);

    outEstrelas.textContent = '';

    if(inLinhas.value == '' || isNaN(linhas) || linhas<0) {
        alert('Insira um valor numérico.');
        inLinhas.value = '';
        inLinhas.focus();
        return;
    }

    for(var i = 1; i<=linhas; i++) {
        outEstrelas.textContent += '*';
        for(var j = 1; j<(i); j++) {
            outEstrelas.textContent += '*';
        }
        outEstrelas.textContent += '\n';
    }
}
var btnCriar = document.getElementById('btnCriar');
btnCriar.addEventListener('click', criarEstrelas);