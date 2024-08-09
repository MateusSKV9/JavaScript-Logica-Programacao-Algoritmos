// ADICIONAR PRODUTO
function adicionarProduto() {
    var inProduto = document.getElementById('inProduto');
    
    var produto = inProduto.value;
    
    if(produto=='' || !isNaN(produto)) {
        alert('Insira um produto.');
        inProduto.focus();
        return;
    }

    if(verProdutoExiste(produto)) {
        alert('Produto já adicionado');
        inProduto.focus();
        return;
    }

    if(localStorage.getItem('listaProdutos')) {
        var listaProdutos = localStorage.getItem('listaProdutos')+';'+produto;

        localStorage.setItem('listaProdutos', listaProdutos);
    } else {
        localStorage.setItem('listaProdutos', produto);
    }
    listarProdutos();

    inProduto.value = '';
    inProduto.focus();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarProduto);


// LISTAR DADOS
function listarProdutos() {
    var outLista = document.getElementById('outLista');

    if(localStorage.getItem('listaProdutos')) {
        var produtos = localStorage.getItem('listaProdutos').split(';').sort();
        
        var lista = 'Produtos adicionados\n-----------------------------------------\n';
    
        for(var i = 0; i<produtos.length; i++) {
            lista += produtos[i]+'\n';
        }
    
        outLista.textContent = lista;
    } else {
        outLista.textContent = '';
    }
}


// VERIFICAR SE JÁ EXISTE
function verProdutoExiste(produto) {
    var existe = false;

    if(localStorage.getItem('listaProdutos')) {
        var listaProdutos = localStorage.getItem('listaProdutos').split(';');

        if(listaProdutos.indexOf(produto) != -1) {
            existe = true;
        }
    }

    return existe;
}


// LIMPAR DADOS
function limparDados() {
    if(confirm('Confirmar exclusão de produtos')) {
        localStorage.removeItem('listaProdutos');
        listarProdutos();
    }
}
var btnLimpar = document.getElementById('btnLimpar');
btnLimpar.addEventListener('click', limparDados);