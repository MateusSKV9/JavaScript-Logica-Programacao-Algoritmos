var carros = [];

// ADICIONAR
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
    
    for(var i = 0; i<carros.length; i++) {
        if(carros[i].modelo === modelo);
        alert('Modelo já adicionado.');
        return;
    }

    carros.push({ modelo: modelo, preco: preco });

    inModelo.value = '';
    inPreco.value = ''; 
    outLista.textContent = ''

    listarCarros();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarCarro);

// LISTAR
function listarCarros() {
    if(carros.length == 0) {
        alert('Sem carros registrados. Adicione-os.');
        inModelo.focus();
        return;
    }

    var lista = ''

    for(var i = 0; i<carros.length; i++) {
        lista += carros[i].modelo + ' - R$: '+carros[i].preco.toFixed(2)+'\n';
    }

    document.getElementById('outLista').textContent = lista;
}
var btnListar = document.getElementById('btnListar');
btnListar.addEventListener('click', listarCarros);

// FILTRAR
function filtrarCarros() {
    var maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar?'));

    if(maximo==0 || isNaN(maximo)) {
        return;
    }

    var lista = '';

    for(var i = 0; i<carros.length; i++) {
        if(carros[i].preco <= maximo) {
            lista += carros[i].modelo + ' - R$: '+carros[i].preco.toFixed(2)+'\n';
        }
    }

    if(lista == '') {
        outLista.textContent = 'Não há carros com preço até R$ '+maximo.toFixed(2);
    } else {
        outLista.textContent = 'Carros até R$ '+maximo.toFixed(2)+'\n------------------------------\n'+lista;
    }
}
var btnFiltrar = document.getElementById('btnFiltrar');
btnFiltrar.addEventListener('click', filtrarCarros);