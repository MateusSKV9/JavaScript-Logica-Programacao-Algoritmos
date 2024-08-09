function trocarClube() {
    var imgClube = document.getElementById('imgClube');
    var divTitulo = document.getElementById('divTitulo');

    var clubes = ['Brasil', 'Pelotas', 'Farroupilha'];

    for(var i = 0; i<clubes.length; i++) {
        if(inputsRadio[i].checked) {
            var selecao = i;
            break;
        }
    }

    if(selecao<=2) {
        divTitulo.className = 'row cores'+clubes[selecao];

        imgClube.src = 'img/'+clubes[selecao].toLocaleLowerCase()+'.png';
        imgClube.className = 'exibe';
        imgClube.alt = 'Símbolo do '+clubes[selecao];
        localStorage.setItem('clube', clubes[selecao]);
    } else {
        divTitulo.className = 'row';
        imgClube.className = 'oculta';
        imgClube.alt = '';
        localStorage.removeItem('clube');
    }
}
var inputsRadio = document.getElementsByTagName('input');
for(var i = 0; i<inputsRadio.length; i++) {
    inputsRadio[i].addEventListener('change', trocarClube);
}

function verificarClube() {
    if(localStorage.getItem('clube')) {
        var clube = localStorage.getItem('clube');

        if(clube=='Brasil') {
            inputsRadio[0].checked = true;
        } else if(clube=='Pelotas') {
            inputsRadio[1].checked = true;
        } else {
            inputsRadio[2].checked = true;
        } 
    }

    trocarClube();
}
verificarClube();


// VERIFICA VISITAS
function contarVisitas() {
    var boasVindas = document.getElementById('outBoasVindas');
    
    if(localStorage.getItem('visitas')) {
        visitas = Number(localStorage.getItem('visitas')) + 1;
        localStorage.setItem('visitas', visitas);
    } else {
        localStorage.setItem('visitas', 1);
        var visitas = localStorage.getItem('visitas');
    }
    
    if(visitas==1) {
        boasVindas.textContent = 'Muito bem vindo! Esta é sua primeira visita ao nosso site'; 
    } else {
        boasVindas.textContent = 'Quem bom que você voltou! Esta é sua visita de número '+visitas+' ao nosso site.';
    }
}
contarVisitas();