var pacientes = [];

//ADICIONAR
function adicionarPacientes() {
    var inPaciente = document.getElementById('inPaciente');
    var outLista = document.getElementById('outLista');

    var nome = inPaciente.value;

    if(nome == '') {
        alert('Informe o nome do paciente.');
        inPaciente.focus();
        return;
    }

    pacientes.push(nome);
    var lista = '';

    for(var i=0; i<pacientes.length; i++) {
        lista += (i+1)+'. '+pacientes[i]+'\n';
    }

    outLista.textContent = lista;

    inPaciente.value = '';
    inPaciente.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarPacientes);

// URGENCIA
function urgencia() {
    var inPaciente = document.getElementById('inPaciente');
    var outLista = document.getElementById('outLista');

    var nome = inPaciente.value;

    if(nome == '') {
        alert('Informe o nome do paciente.');
        inPaciente.focus();
        return;
    }

    pacientes.unshift(nome);
    var lista = '';

    for(var i=0; i<pacientes.length; i++) {
        lista += (i+1)+'. '+pacientes[i]+'\n';
    }

    outLista.textContent = lista;

    inPaciente.value = '';
    inPaciente.focus();
}
var btnUrgencia = document.getElementById('btnUrgencia');
btnUrgencia.addEventListener('click', urgencia);

// ATENDER
function atenderPaciente() {
    var inPaciente = document.getElementById('inPaciente');

    if(pacientes.length == 0) {
        alert('Não há pacientes na lista de espera.');
        inPaciente.focus();
        return;
    }

    var outAtendimento = document.getElementById('outAtendimento');
    var outLista = document.getElementById('outLista');

    var atender = pacientes.shift();
    outAtendimento.textContent = atender;

    var lista = '';

    for(var i = 0; i<pacientes.length; i++) {
        lista += (i+1)+'. '+pacientes[i]+'\n';
    }

    outLista.textContent = lista;
    inPaciente.value = '';
}
var btnAtender = document.getElementById('btnAtender');
btnAtender.addEventListener('click', atenderPaciente);