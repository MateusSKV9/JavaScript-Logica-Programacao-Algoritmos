var numeros = [];

// ADICIONAR
function adicionar() {
    var inNumero = document.getElementById('inNumero');
    var numero = Number(inNumero.value);

    if(inNumero.value =='' || isNaN(numero)) {
        alert('Insira um valor númerico.');
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    if(numeros.indexOf(numero) != -1) {
        alert('Número já adicionado.');
        return;
    }

    numeros.push(numero);

    listarNumeros();
    inNumero.value = '';
    inNumero.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

// LISTAR
function listarNumeros() {
    document.getElementById('outNumeros').textContent = 'Números: '+numeros.join(', ');
}

// VERIFICAR ORDEM
function verificarOrdem() {
    var copia = numeros.slice().sort(function(a, b) {return a-b});

    if(numeros.length == 0) {
        alert('Não há números registrados.');
        return;
    }

    var emOrdem = true;
    for(var i = 0; i<numeros.length; i++) {
        if(copia[i] !== numeros[i]) {
            emOrdem = false;
            break;
        }
    }

    if(emOrdem===true) {
        document.getElementById('outResposta').textContent = 'Atenção... Números estão em ordem!';
    } else {
        document.getElementById('outResposta').textContent = 'Atenção... Números não estão em ordem!';
    }
}
var btnVerificar = document.getElementById('btnVerificarOrdem');
btnVerificar.addEventListener('click', verificarOrdem);

// RECARREGAR
function recarregar() {
    location.reload();
}
var btnRecarregar = document.getElementById('btnRecarregar');
btnRecarregar.addEventListener('click', recarregar);
