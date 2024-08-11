// ADICIONAR TIME
function adicionarTime() {
    var inClube = document.getElementById('inClube');
    var clube = inClube.value;

    if(clube=='' || !isNaN(clube)) {
        alert('Informe um clube');
        inClube.focus();
        return;
    }

    if(localStorage.getItem('listaClubes')) {
        var listaClubes = localStorage.getItem('listaClubes')+';'+clube;
        localStorage.setItem('listaClubes', listaClubes);
    } else {
        localStorage.setItem('listaClubes', clube);
    }

    mostrarClubes();

    inClube.value = '';
    inClube.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarTime);


// MOSTRAR CLUBES
function mostrarClubes() {
    var divCLubes = document.getElementById('outClubes');
    divCLubes.textContent = '';
    
    if(localStorage.getItem('listaClubes')) {
        var listaClubes = localStorage.getItem('listaClubes').split(';');
        
        for(var i = 0; i<listaClubes.length; i++) {
            var h5 = document.createElement('h5');
            var mensagem = document.createTextNode(listaClubes[i]);
            h5.appendChild(mensagem);
            divCLubes.appendChild(h5);
        }
    }
}
mostrarClubes();

// MONTAR TABELA
function montarTabela() {
    var tabela = document.getElementById('tbClubes');
    
    if(!localStorage.getItem('listaClubes')) {
        alert('Não há clubes registrados');
        return;
    }

    var clubes = localStorage.getItem('listaClubes').split(';');

    if(clubes.length%2==0) {
        for(var i = 0; i<=(clubes.length-1); i+=2) {
            inserirLinha(tabela, clubes[i], clubes[i+1]);
        }
    } else {
        alert('Digite uma quantidade par de clubes');
        return;
    }
}
var btnMontarTabela = document.getElementById('btnMontarTabela');
btnMontarTabela.addEventListener('click', montarTabela);


// INSERIR LINHA
function inserirLinha(tabela, timeA, timeB) {
    var linha = tabela.insertRow(-1);

    var col1 = linha.insertCell(0);
    var col2 = linha.insertCell(1);

    col1.textContent = timeA;
    col2.textContent = timeB;
}


// NOVOS TIMES
var btnCriarNovaLista = document.getElementById('btnClubes');
btnCriarNovaLista.addEventListener('click', function() {
    localStorage.removeItem('listaClubes');
    location.reload();
})