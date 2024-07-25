function mostrarPrevisao() {
    var inNumero = document.getElementById('inNumero');
    var inAnos = document.getElementById('inAnos');
    var outResultado = document.getElementById('outResultado');

    var numero = Number(inNumero.value);
    var anos = Number(inAnos.value);

    if(numero==0 || isNaN(numero) || anos==0 || isNaN(anos)) {
        alert('Insira um valor válido.');
        inNumero.value = '';
        inAnos.value = '';
        inNumero.focus();
        return;
    }
    outResultado.textContent = '';

    for(var i = 0; i<anos; i++) {
        outResultado.textContent += (i+1)+'º Ano: '+(Math.pow(3, i) * numero)+' Chinchilas \n';
    }

}
var btnMostrar = document.getElementById('btnMostrar');
btnMostrar.addEventListener('click', mostrarPrevisao);