function verSenha() {
    var inSenha = document.getElementById('inSenha');
    var outResposta = document.getElementById('outResposta');

    var senha = inSenha.value;

    var erros = [];

    if(senha.length<8 || senha.length>15) {
        erros.push('Possuir entre 8 e 15 caracteres');
    }

    if(senha.match(/[0-9]/g)==null) {
        erros.push('Possuir pelos menos um número');
    }

    if(!senha.match(/[a-z]/g)==null) {
        erros.push('Possuir pelo menos um letra minúscula');
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length==1) {
        erros.push('Possuir pelo menos duas letra maiúscula');
    }

    if(!senha.match(/\W|_/g)) {
        erros.push('Possuir pelo menos 1 símbolo especial');
    }

    if(erros.length==0) {
        outResposta.textContent = 'Ok! Senha válida';
    } else {
        outResposta.textContent = 'Erro... A senha deve '+erros.join('; ');
    }
}
var btnVerificar = document.getElementById('btnVerificarSenha');
btnVerificar.addEventListener('click', verSenha);