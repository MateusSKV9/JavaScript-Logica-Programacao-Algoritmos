// SELECIONAR TAREFA
function adicionarTarefa() {
    var inTarefa = document.getElementById('inTarefa');
    var tarefa = inTarefa.value;

    if(tarefa=='') {
        alert('Informe uma tarefa');
        inTarefa.focus();
        return;
    }

    var divQuadro = document.getElementById('divQuadro');
    var h5 = document.createElement('h5');
    var texto = document.createTextNode(tarefa);
    h5.appendChild(texto);
    divQuadro.appendChild(h5);

    inTarefa.value = '';
    inTarefa.focus();
}
var btnAdicionar = document.getElementById('btAdicionar');
btnAdicionar.addEventListener('click', adicionarTarefa);


// SELECIONAR TAREFA
function selecionarTarefa() {
    var h5 = document.getElementsByTagName('h5');
    var numH5 = h5.length;

    if(numH5 == 0) {
        alert('Não há tarefa para selecionar');
        return;
    }

    var aux = -1;
    for(var i = 0; i<numH5; i++) {
        if(h5[i].className == 'tarefaSelecionada') {
            h5[i].className = 'tarefaNormal';
            aux = i;
            break;
        }
    }

    if(aux==numH5-1) {
        aux = -1;
    }

    h5[aux+1].className = 'tarefaSelecionada';
}
var btnSelecionar = document.getElementById('btSelecionar');
btnSelecionar.addEventListener('click', selecionarTarefa);


// RETIRAR SELECIONADA
function retirarSelecionada() {
    var divQuadro = document.getElementById('divQuadro');
    var h5 = document.getElementsByTagName('h5');
    var numH5 = h5.length;

    var aux= -1;

    for(var i = 0; i<numH5; i++) {
        if(h5[i].className == 'tarefaSelecionada') {
            aux = i;
            break;
        }
    }

    if(aux==-1) {
        alert('Selecione uma tarefa para removê-la');
        return;
    }

    if(confirm('Confirmar exclusão de "'+h5[aux].textContent+'"?')) {
        divQuadro.removeChild(h5[aux]);
    } 
}
var btnRetirar = document.getElementById('btRetirar');
btnRetirar.addEventListener('click', retirarSelecionada);


// GRAVAR TAREFAS
function gravarTarefas() {
    var h5 = document.getElementsByTagName('h5');
    var numH5 = h5.length;

    if(numH5==0) {
        alert('Não há tarefas para serem salvas');
        return;
    }

    var tarefas = '';

    for(var i = 0; i<numH5; i++) {
        tarefas += h5[i].textContent + ';';
    }
    localStorage.setItem('tarefasDia', tarefas.substr(0, tarefas.length-1));

    if(localStorage.getItem('tarefasDia')) {
        alert('Ok! Tarefas salvas');
    }
}
var btnGravar = document.getElementById('btGravar');
btnGravar.addEventListener('click', gravarTarefas);

// RECUPERAR TEREFA
function recuperarTarefas() {
    if(localStorage.getItem('tarefasDia')) {
        var tarefas = localStorage.getItem('tarefasDia').split(';');
        var divQuadro = document.getElementById('divQuadro');

        for(var i = 0; i<tarefas.length; i++) {
            var h5 = document.createElement('h5');
            var texto = document.createTextNode(tarefas[i]);
            h5.appendChild(texto);
            divQuadro.appendChild(h5);
        }
    }
}
recuperarTarefas();