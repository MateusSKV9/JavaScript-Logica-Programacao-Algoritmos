// EXIBIR PARTES DO NOME
function gerarPartes() {
    var inNome = document.getElementById('inNome');
    var nome = inNome.value;

    if(nome=='' || (nome.indexOf(' ')==-1) || !isNaN(nome)) {
        alert('Digite o nome completo');
        inNome.focus();
        return;
    }

    var divNome = document.getElementById('outNome');
    
    if(divNome.getElementsByTagName('h3').length>0) {
        divNome.innerHTML = '';
    }

    var partes = nome.split(' ');

    for(var i = 0; i<partes.length; i++) {
        var h3 = document.createElement('h3');
        var texto = document.createTextNode(partes[i]);

        var d1 = Math.floor(Math.random()*10);
        var d2 = Math.floor(Math.random()*10);
        var d3 = Math.floor(Math.random()*10);
        var cor = '#'+d1+d2+d3;

        h3.style.color = cor;

        h3.appendChild(texto);
        divNome.appendChild(h3);
    }
}
var btnExibir = document.getElementById('btnExibir');
btnExibir.addEventListener('click', gerarPartes);