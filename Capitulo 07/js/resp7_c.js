// CALCULAR DESCONTO
function calcularDesconto(valor, taxaDesconto) {
    if(taxaDesconto>0) {
        var desconto = valor*(taxaDesconto/100);
        return desconto;
    }
}


// MOSTRAR SELECT
function mostrarSelect() {
    var pSelect = document.getElementById('pSelect');
    var select = document.getElementById('select');

    if(rdSim.checked) {
        pSelect.className = 'exibe';
    }  else {
        limparCampos();
        pSelect.className = 'oculta';
        select.value = '';
    }
}
var rdSim = document.getElementById('rdSim');
rdSim.addEventListener('change', mostrarSelect);

var rdNao = document.getElementById('rdNao');
rdNao.addEventListener('change', mostrarSelect);


// LIMPAR CAMPOS
function limparCampos() {
    var outDesconto = document.getElementById('outDesconto');
    var outValor = document.getElementById('outValor');

    outDesconto.textContent = '';
    outValor.textContent = '';
}


// INFORMAR DESCONTO
function informarDesconto() {
    var inValor = document.getElementById('inValor');
    var select = document.getElementById('select');
    var outDesconto = document.getElementById('outDesconto');
    var outValor = document.getElementById('outValor');

    var valor = Number(inValor.value);
    var taxaDesconto;

    limparCampos();

    if(valor<=0 || isNaN(valor)) {
        alert('Insira corretamente o valor.');
        inValor.focus();
        return;
    }

    if(select.value=='amigoAnimal') {
        taxaDesconto = 20;
    } else if(select.value=='saudeAnimal') {
        taxaDesconto = 50;
    } else {
        taxaDesconto = 10;
    }

    var desconto = calcularDesconto(valor, taxaDesconto);
    var total = valor - desconto;
    
    outDesconto.textContent = 'Desconto R$: '+desconto;
    outValor.textContent = 'A pagar R$:'+total;
}
var btnInformarDesconto = document.getElementById('btnInformarDesconto');
btnInformarDesconto.addEventListener('click', informarDesconto);