// VALIDAR NOME
function validarNome(nome) {
    if(nome=='' || !isNaN(nome)) {
        alert('Insira um nome válido.');
    } else {
        if(nome.indexOf(' ') == -1) {
            alert('Insira o nome completo.')
            return false;
        } else {
            return true;
        }
    }

}

// OBTERSOBRENOME
function obterSobrenome(nome) {
    var ultEspaco = nome.lastIndexOf(' ');
    var sobrenome = nome.substr(ultEspaco+1);

    return sobrenome.toLowerCase();
}

// OBTER QUANTIDADE DE VOGAIS
function contarVogais(nome) {
    var qtdVogais = 0;
    var nome = nome.toLowerCase();

    for(var i = 0; i<nome.length; i++) {
        if(nome.charAt(i)=='a' || nome.charAt(i)=='e' || nome.charAt(i)=='i' || nome.charAt(i)=='o' || nome.charAt(i)=='u') {
            qtdVogais++;
        }
    }

    if(qtdVogais<10) {
        qtdVogais = '0'+qtdVogais;
    }

    return qtdVogais;
}

// GERAR SENHA
function gerarSenha() {
    var inNome = document.getElementById('inNome');
    var outSenha = document.getElementById('outSenha');
    var nome = inNome.value;

    outSenha.textContent = '';

    if(!validarNome(nome)) {
        inNome.focus();
        return;
    }

    var senha = obterSobrenome(nome)+contarVogais(nome);
    outSenha.textContent = 'Senha inicial: '+senha;
}
var btnGerarSenha = document.getElementById('btnGerarSenha');
btnGerarSenha.addEventListener('click', gerarSenha);