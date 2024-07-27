var carros = [];

function adicionarCarro() {
    var inModelo = document.getElementById('inModelo');
    var inPreco = document.getElementById('inPreco');

    var modelo = inModelo.value;
    var preco = Number(inPreco.value);

    if(modelo=='' || preco==0 || isNaN(preco)) {
        alert('Insira valores válidos.');
        inModelo.focus();
        return;
    }

    carros.push({ modelo: modelo, preco: preco });
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarCarro);

function listarCarros() {
    var outLista = document.getElementById('outLista');

    for(var i = 0; i<carros.length; i++) {
        outLista.textContent += carros[i].modelo + ' - R$: '+carros[i].preco;
    }
}