// MONTAR TABELA
function montarTabela() {
    if(localStorage.getItem('jogoPalavra')) {
        var palavras = localStorage.getItem('jogoPalavra').split(';');
        var dicas = localStorage.getItem('jogoDica').split(';');

        var tbPalavras = document.getElementById('tbPalavras');
        var linha, col1, col2, col3;

        for(var i = 0; i<palavras.length; i++) {
            linha = tbPalavras.insertRow(-1);

            col1 = linha.insertCell(0);
            col2 = linha.insertCell(1);
            col3 = linha.insertCell(2);

            col1.textContent = palavras[i];
            col2.textContent = dicas[i];
            col3.innerHTML = '<input type="checkbox">';
        }
    }
}

// MOSTRAR PALAVRAS
var ckMostrar = document.getElementById('ckMostrar');
ckMostrar.addEventListener('change', function() {
    if(ckMostrar.checked) {
        montarTabela();
        btExcluir.className = 'btn btn-danger exibe';
    } else {
        location.reload();
    }
})

// MARCAR PALAVRAS
var ckTodos = document.getElementById('ckTodos');
ckTodos.addEventListener('change', function() {
    var tbPalavras = document.getElementById('tbPalavras');
    var ckExcluir = tbPalavras.getElementsByTagName('input');

    var status = ckTodos.checked;

    for(var i = 1; i<ckExcluir.length; i++) {
        ckExcluir[i].checked = status;
    }
});

// REMOVER PALAVRAS
function removerPalavras() {
    var tbPalavras = document.getElementById('tbPalavras');
    var ckExcluir = tbPalavras.getElementsByTagName('input');

    var temSelecionado = false;

    for(var i = 0; i<ckExcluir.length; i++) {
        if(ckExcluir[i].checked) {
            temSelecionado = true;
            break;
        }
    }

    if(!temSelecionado) {
        alert('Não há palavras selecionadas');
        return;
    }

    if(confirm('Confirmar exclusão das palavras selecionadas?')); {
        localStorage.removeItem('jogoPalavra');
        localStorage.removeItem('jogoDica');
        var palavras = '';
        var dicas = '';

        for(i = 1; i<ckExcluir.length; i++) {
            if(!ckExcluir[i].checked) {
                palavras += tbPalavras.rows[i].cells[0].textContent+';';
                dicas += tbPalavras.rows[i].cells[1].textContent+';';
            }
        }
        if(palavras!='') {
            localStorage.setItem('jogoPalavra', palavras.substr(0, palavras.length-1));
            localStorage.setItem('jogoDica', dicas.substr(0, dicas.length-1));
        }

        for(i = ckExcluir.length - 1; i>0; i--) {
            if(ckExcluir[i].checked) {
                tbPalavras.deleleRow(i);
            }
        }
        ckExcluir[0].checked = false;
    }
}
var btExcluir = document.getElementById('btExcluir');
btExcluir.addEventListener('click', removerPalavras);