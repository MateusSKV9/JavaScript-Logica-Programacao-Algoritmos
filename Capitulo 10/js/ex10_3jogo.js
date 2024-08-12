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
}