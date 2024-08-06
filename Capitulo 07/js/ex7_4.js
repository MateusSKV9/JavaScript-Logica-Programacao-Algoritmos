var btnExibir = document.getElementById('btnExibir');

btnExibir.addEventListener('click', function() {
    var inPreco = document.getElementById('inPreco');
    var outParcelas = document.getElementById('outParcelas');
   
    var preco = Number(inPreco.value);
    var lista = '';

    for(var i = 1; i<=10; i++) {
        lista += i+'x de R$: '+(preco/i).toFixed(2)+'\n';
    }
    outParcelas.textContent = 'Opcões de pagamento\n\n'+lista;
});