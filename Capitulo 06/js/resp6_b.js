function gerarCitacao() {
    var inNome = document.getElementById('inNome');
    var outCitacao = document.getElementById('outCitacao');

    var nome = inNome.value;

    if(inNome=='' || !isNaN(nome) || nome.indexOf(' ')==-1) {
        alert('Insira um nome completo corretamente');
        inNome.focus();
        return;
    }

    var citacao = '';
    var partes = nome.split(' ');
    ultEspaco = nome.lastIndexOf(' ');
    
    citacao += nome.substr(ultEspaco)+', ';

    for(var i = 0; i<partes.length-1; i++) {
        if(partes[i].substr(0, 1)!='d') {
            citacao += partes[i].substr(0, 1)+'. ';
        }
    }

    outCitacao.textContent = citacao.toUpperCase();
}
var btnGerarCitacao = document.getElementById('btnGerarCitacao');
btnGerarCitacao.addEventListener('click', gerarCitacao);