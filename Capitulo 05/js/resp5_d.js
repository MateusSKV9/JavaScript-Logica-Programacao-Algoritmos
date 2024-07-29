var noticias = [];

function adicionar() {
    var inNoticia = document.getElementById('inNoticia');
    var noticia = inNoticia.value;

    if(noticia=='' || !isNaN(noticia)) {
        alert('Insira corretamente a notícia.');
        inNoticia.focus();
        return;
    }

    noticias.push(noticia);
    inNoticia.value = '';
    inNoticia.focus();
    document.getElementById('outTotalNoticias').textContent = "Notícias cadastradas: "+noticias.length;
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionar);

function listarUltimasNoticias() {
    var numeroNoticias = Number(prompt('Insira quantas mensagens quer ver: '));

    if(numeroNoticias>noticias.length) {
        alert('Quantidade de nóticias superior ao existente');
        return;
    }

    var lista = numeroNoticias+' últimas notícias \n -------------------------------------\n';

    for(var i = (noticias.length-1); i>(noticias.length-1-numeroNoticias); i--) {
        lista += (i+1)+'º) '+noticias[i]+'\n';
    }
    document.getElementById('outNoticias').textContent = lista;
}
var btnListarNoticias = document.getElementById('btnListarNoticias');
btnListarNoticias.addEventListener('click', listarUltimasNoticias);

