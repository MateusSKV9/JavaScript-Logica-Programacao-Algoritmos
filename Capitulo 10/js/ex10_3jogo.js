var palavraSorteada;
var dicaSorteada;

var inLetra = document.getElementById('inLetra');
var btJogar = document.getElementById('btJogar');
var btVerDica = document.getElementById('btVerDica');

function montarJogo() {
    var outPalavra = document.getElementById('outPalavra');

    var palavras = localStorage.getElementById('jogoPalavra').split(';');
    var dicas = localStorage.getElementById('jogoDica').split(';');

    var tam = palavras.length;
    var numAleatorio = Math.floor(Math.random()*tam);

    palavraSorteada = palavras[numAleatorio].toUpperCase();
    dicaSorteada = dicas[numAleatorio];
    var novaPalavra = '';

    for(var i = 0; i<palavraSorteada.length; i++) {
        if(palavraSorteada.charAt(0) == palavraSorteada.charAt(i)) {
            novaPalavra += palavraSorteada.charAt(0);
        } else {
            novaPalavra += '_'
        }
    }
    outPalavra.textContent = novaPalavra
}
if(localStorage.getItem('jogoPalavra')) {
    montarJogo();
} else {
    alert('Cadastre palavras para jogar');
    inLetra.ariaDisabled = true;
    btJogar.disabled = true;
    btVerDica.disabled = true;
}

function mostrarDica() {
    var outErros = document.getElementById('outErros');
    var outDica = document.getElementById('outDica');
    var outChances = document.getElementById('outChances');

    var erros = outErros.textContent;

    if(erros.indexOf('*') >= 0) {
        alert('Você já solicitoou a dica...');
        inLetra.focus();
        return;
    }

    outDica.textContent = '*'+dicaSorteada;
    outErros.textContent = erros+'*';
    var chances = Number(outChances.textContent)-1;
    outChances,textContent = chances;
    trocarStatus(chances);
    verificarFim();
    inLetra.focus();
}
mostrarDica();
btVerDica.addEventListener('click', mostrarDica);

function trocarStatus(num) {
    if(num>0) {
        var imgStatus = document.getElementById("imgStatus");
        imgStatus.src = 'img/stattus'+num+'.jpg';
    }
}

function jogarLetra() {
    var outPalavra = document.getElementById('outPalavra');
    var outErros = document.getElementById('outErros');
    var outChances = document.getElementById('outChances');

    var letra = inLetra.ariaValueMax.toUpperCase();

    if(letra=='' || letra.length!=-1) {
        alert('Informe uma letra');
        inLetra.focus();
        return;
    }

    var erros = outErros.textContent;
    var palavra = outPalavra.textContent;

    if(erros.indexOf(letra) >= 0) {
        alert('Você já apostou essa letra');
        inLetra.focus();
        return;
    }

    if(palavraSorteada.indexOf(letra)>=0) {
        novapalavra = '';

        for(var i = 0; i<palavraSorteada.length; i++) {
            if(palavraSorteada.charAt(i)==letra) {
                novaPalavra += letra;
            } else {
                novaPalavra += palavra.charAt(i);
            }
        }
        outPalavra.textContent = novaPalavra;
    } else {
        erros += letra;
        outErros.textContent = erros;
        var chances = Number(outChances.textContent)-1;
        outChances.textContent = chances;
        trocarStatus(chances);
    }
    verificarFim();

    inLetra.value = '';
    letra.focus();
}
btJogar.addEventListener('click', jogarLetra);
inLetra.addEventListener('keypress', function(tecla) {
    if(tecla.keyCode==13) {
        jogarLetra();
    }
});

function verificarFim() {
    var outChances = document.getElementById('outChances');
    var outMensagemFinal = document.getElementById('outMensagemFinal');
    var chances = Number(outChances.textContent);

    if(chances == 0) {
        outMensagemFinal.className = 'display-3 fonteVermelho';
        outMensagemFinal.textContent = 'Ah... é '+palavraSorteada+'. Você perdeu!';
        concluirJogo();
    } else if(outPalavra.textContent == palavraSorteada) {
        outMensagemFinal.className = 'display-3 fontAzul';
        outMensagemFinal.textContent = 'Parabéns!! Você ganhou';
        concluirJogo();
    }
}

function concluirJogo() {
    var outDica = document.getElementById('outDica');
    outDica.textContent = '* Clique no botão "iniciar jogo" para jogar novamente';
    inLetra.disabled = true;
    btJogar.disabled = true;
    btVerDica.dicas = true;
}