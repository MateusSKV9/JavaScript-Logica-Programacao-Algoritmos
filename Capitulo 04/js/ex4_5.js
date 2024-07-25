var qtd = 0;
var total = 0;

function registrarConta() {
    var inDescricao = document.getElementById('inDescricao');
    var inValor = document.getElementById('inValor');
    var outDescricao = document.getElementById('outDescricao')
    var outTotal = document.getElementById('outTotal');

    var descricao = inDescricao.value;
    var valor = Number(inValor.value);

    if(inDescricao.value == '' || valor <= 0 || isNaN(valor)) {
        alert('Preencha os campos corretamente.');
        inDescricao.focus();
        return;
    }

    qtd++;
    total += valor;
    outDescricao.textContent += descricao+' - R$: '+valor.toFixed(2)+'\n';
    outTotal.textContent = '-----------------------------------\n'
                            +qtd+' Conta(s) - Total R$: '+total.toFixed(2);

    inDescricao.value = '';
    inValor.value = '';
    inDescricao.focus();
}
var btnRegistrar = document.getElementById('btnRegistrar');
btnRegistrar.addEventListener('click', registrarConta);