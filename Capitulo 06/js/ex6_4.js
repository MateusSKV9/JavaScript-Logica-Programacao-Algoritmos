function gerarCracha() {
    var inNome = document.getElementById('inNome');
    var outCracha = document.getElementById('outCracha');

    var nome = inNome.value; 
    
    if(nome=='' || !isNaN(nome) || nome.indexOf(' ')==-1) {
        alert('Insira o nome completo corretamente');
        inNome.focus();
        return;
    }

    var priEspaco = nome.indexOf(' ');
    var ultEspaco = nome.lastIndexOf(' ');

    var cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco);

    outCracha.textContent += 'Crachá: '+cracha+' K='+ultEspaco+' '+priEspaco;
}
var btnGerarCracha = document.getElementById('btnGerarCracha');
btnGerarCracha.addEventListener('click', gerarCracha);