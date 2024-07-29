var candidatos = [];

function adicionar() {
    var inCandidato = document.getElementById('inCandidato');
    var inAcertos = document.getElementById('inAcertos');

    var candidato = inCandidato.value;
    var acertos = Number(inAcertos.value);

    if(candidato == '' || acertos<0 || isNaN(acertos) || inAcertos.value=='') {
        alert('Preencha corretamente os campos');
        inCandidato.focus();
        return;
    }

    candidatos.push({ nome: candidato, acertos: acertos });

    listarCandidatos();
    inCandidato.value = '';
    inAcertos.value = '';
    inCandidato.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

function listarCandidatos() {
    var lista = '';

    if(candidatos.length == 0) {
        alert('Não há candidatos registrados.');
        return;
    }

    for(var i = 0; i<candidatos.length; i++) {
        lista += candidatos[i].nome+' - '+candidatos[i].acertos+' acertos \n';
    }
    document.getElementById('outCandidatos').textContent = lista;
}
var btnListar = document.getElementById('btnListar');
btnListar.addEventListener('click', listarCandidatos);

function listarAprovados() {
    if(candidatos.length == 0) {
        alert('Lista de candidatos de está vazia');
        return;
    }

    var media = Number(prompt('Insira a média de acertos para aprovação: '));
    var lista = '';
    var aprovados = false;

    for(var i = 0; i<candidatos.length; i++) {
        if(candidatos[i].acertos >= media) {
            lista += candidatos[i].nome+' - '+candidatos[i].acertos+' acertos \n';
            aprovados = true;
        }
    }

    if(aprovados) {
        document.getElementById('outCandidatos').textContent = lista;
    } else {
        document.getElementById('outCandidatos').textContent = 'Não há candidatos aprovados.';
    }
}
var btnListarAprovados = document.getElementById('btnListarAprovados');
btnListarAprovados.addEventListener('click', listarAprovados);