function gerarEmail() {
    var inFuncionario = document.getElementById('inFuncionario');
    var outEmail = document.getElementById('outEmail');

    var funcionario = inFuncionario.value;

    if(funcionario=='' || !isNaN(funcionario) || funcionario.indexOf(' ')==-1) {
        alert('Prencha o seeu nome completo corretamente.');
        inFuncionario.focus();
        return;
    }

    var nome = funcionario.split(' ');
    var email = '';

    for(var i = 0; i<nome.length-1; i++) {
        email += nome[i].charAt(0).toLowerCase();
    }
    email+= nome[i]+"@empresa.com.br";

    outEmail.textContent = "Email: "+email.toLowerCase();
}
var btnGerarEmail = document.getElementById('btnGerarEmail');
btnGerarEmail.addEventListener('click', gerarEmail);