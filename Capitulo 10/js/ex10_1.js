const CAVALOS = ['Marujo', 'Tordilho', 'Belga', 'Twister', 'Jade', 'Lucky'];

var apostas = [];

function adicionarAposta() {
    var inCavalo = document.getElementById('inCavalo');
    var inValor = document.getElementById('inValor');
    var outApostas = document.getElementById('outApostas');

    var cavalo = Number(inCavalo.value);
    var valor = Number(inValor.value);

    if(isNaN(cavalo) || isNaN(valor) || valor <=0 || !validarCavalo(cavalo)) {
        alert('Aposta inválida');
        inCavalo.focus();
        return;
    }

    apostas.push({ cavalo: cavalo, valor: valor });
    var lista = 'Apostas realizadas\n---------------------------------\n';

    for(var i = 0; i<apostas.length; i++) {
        lista += 'Nº '+apostas[i].cavalo + ' '+obterCavalo(apostas[i].cavalo);
        lista += '- R$: '+apostas[i].value.toFixed(2)+'\n';
    }
    outApostas.textContent = lista;
}
var btnApostar = document.getElementById('btApostar');
btnApostar.addEventListener('click', adicionarAposta);


// VALIDAR CAVALO
function validarCavalo(num) {
    var tam = CAVALOS.length;

    if(num>=1 && num<=tam) {
        return true;
    } else {
        return false;
    }
}


// MOSTRAR CAVALO
function mostrarCavalo() {
    var outCavalo = document.getElementById('outCavalo');

    if(inCavalo.value == '') {
        outCavalo.textContent = '';
        return;
    } 

    var cavalo = Number(inCavalo.value);

    if(isNaN(cavalo) || !validarCavalo(cavalo)) {
        outCavalo.textContent = 'Número do Cavalo Inválido';
        return;
    }

    var nomeCavalo = obterCavalo(cavalo);
    var numApostas = contarApostas(cavalo);
    var total = totalizarApostas(cavalo);

    outCavalo.textContent = nomeCavalo+'(apostas: '+numApostas;
    outCavalo.textContent += ' - R$: '+total.toFixed(2)+')';
}
var inCavalo = document.getElementById('inCavalo');
inCavalo.addEventListener('blur', mostrarCavalo);


// OBTER CAVALO
function obterCavalo(num) {
    var posicao = num - 1;
    return CAVALOS[posicao];
}


// CONTAR APOSTAS
function contarApostas(numCavalo) {
    var contador = 0;

    for(var i = 0; i<apostas.length; i++) {
        if(apostas[i].cavalo == numCavalo) {
            contador++;
        }
    }
    return contador;
}


// TOTALIZAR APOSTAS
function totalizarApostas(numCavalo) {
    var total = 0;

    for(var i = 0; i<apostas.length; i++) {
        if(apostas[i].cavalo == numCavalo) {
            total = total+apostas[i].valor;
        }
    }
    return total;
}


// LIMPAR CONTEÚDO
inCavalo.addEventListener('focus', function() {
    inCavalo.value = '';
    document.getElementById('outCavalo').textContent = '';
})