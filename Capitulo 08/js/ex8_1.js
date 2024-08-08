function trocarClube() {
    var imgClube = document.getElementById('imgClube');
    var divTitulo = document.getElementById('divTitulo');

    var clube;

    if(rbBrasil.checked) {
        clube = 'Brasil';
    } else if(rbPelotas.checked) {
        clube = 'Pelotas';
    } else if(rbFarroupilha.checked) {
        clube = 'Farroupilha';
    } else {
        clube = 'Nenhum';
    }

    divTitulo.className = 'row cores'+clube;

    imgClube.src = 'img/'+clube.toLocaleLowerCase()+'.png';

    if(clube!='Nenhum') {
        imgClube.className = 'exibe';
        imgClube.alt = 'Símbolo do '+clube;
    } else {
        imgClube.className = 'oculta';
    }

    localStorage.setItem('clube', clube);
}
var rbBrasil = document.getElementById('rbBrasil');
var rbPelotas = document.getElementById('rbPelotas');
var rbFarroupilha = document.getElementById('rbFarroupilha');
var rbNenhum = document.getElementById('rbNenhum');

rbBrasil.addEventListener('change', trocarClube);
rbPelotas.addEventListener('change', trocarClube);
rbFarroupilha.addEventListener('change', trocarClube);
rbNenhum.addEventListener('change', trocarClube);


function verificarClube() {
    if(localStorage.getItem('clube')) {
        var clube = localStorage.getItem('clube');
    }

    if(clube=='Brasil') {
        rbBrasil.checked = true;
    } else if(clube=='Pelotas') {
        rbPelotas.checked = true;
    } else if(clube=='Farroupilha') {
        rbFarroupilha.checked = true;
    } else {
        rbNenhum.checked = true;
    }

    trocarClube();
}
verificarClube();