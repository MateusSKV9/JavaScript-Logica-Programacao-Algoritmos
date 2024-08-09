// ADICIONAR SERVIÇOS
function adicionarServiço() {
    var inServico = document.getElementById('inServico');
    var servico = inServico.value;

    if(servico == '' || !isNaN(servico)) {
        alert('Insira um serviço');
        inServico.focus();
        return;
    }

    if(servico.indexOf('-')==-1) {
        alert('Digite o serviço e o veículo (serviço-veículo)');
        inServico.focus();
        return;
    }

    if(localStorage.getItem('listaServicos')) {
        var listaServicos = localStorage.getItem('listaServicos')+','+servico;
        localStorage.setItem('listaServicos', listaServicos);
    } else {
        localStorage.setItem('listaServicos', servico);
    }

    listarServicos();
    inServico.value = '';
    inServico.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarServiço);


// LISTAR SERVIÇOS
function listarServicos() {
    var outPendentes = document.getElementById('outPendentes');

    if(localStorage.getItem('listaServicos') && localStorage.getItem('listaServicos')!='') {
        var servicos = localStorage.getItem('listaServicos').split(',');
        var qtdPendentes = servicos.length; 

        outPendentes.textContent = 'Serviços pendentes: '+qtdPendentes;
    } else {
        outPendentes.textContent = 'Serviços pendentes: 0';
    }
}
listarServicos();


// EXECUTAR SERVIÇOS
function exercutarServiço() {
    var outEmExecucao = document.getElementById('outEmExecucao');

    if(localStorage.getItem('listaServicos')) {
        var servicos = localStorage.getItem('listaServicos').split(',');

        outEmExecucao.textContent = servicos[0];
        servicos.shift();

        if(servicos.length>0) {
            localStorage.setItem('listaServicos', servicos.toString());

        } else {
            localStorage.setItem('listaServicos', '');
        }

        listarServicos();
    } else {
        alert('Não há serviço pendente');
        return;
    }
}
var btnExecutar = document.getElementById('btnExecutar');
btnExecutar.addEventListener('click', exercutarServiço);