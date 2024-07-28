var clubes = [];

function adicionarClubes() {
    var inClube = document.getElementById('inClube');

    var clube = inClube.value;

    if(clube=='' || !isNaN(clube)) {
        alert('Preencha corretamente o nome do clube.');
        inClube.value = '';
        inClube.focus();
        return;
    }

    for(var i = 0; i<clubes.length; i++) {
        if(clube==clubes[i] ) {
            alert('Clube já adicionado');
            return;
        }
    }

    clubes.push(clube);

    listarClubes();
    inClube.value = '';
    inClube.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarClubes);

function listarClubes() {
    var lista = '';

    if(clubes.length == 0) {
        alert('Não há clube registrados.');
        return;
    }

    for(var i = 0; i<clubes.length; i++) {
        lista += (i+1)+'. '+clubes[i]+'\n';
    }
    document.getElementById('outExibir').textContent = lista;
}
var btnListar = document.getElementById('btnListar');
btnListar.addEventListener('click', listarClubes);

function montarTabela() {
    if(clubes.length==0 || clubes.length % 2 != 0) {
        alert('Quantidade inválida de clubes.');
        return;
    }

    var lista = '';

    for(var i = 0; i<(clubes.length/2); i++) {
        lista += clubes[i]+' x '+clubes[clubes.length-(i+1)]+'\n';
    }
    document.getElementById('outExibir').textContent = lista;
}
var btnMontarTabela = document.getElementById('btnMontarTabela');
btnMontarTabela.addEventListener('click', montarTabela);