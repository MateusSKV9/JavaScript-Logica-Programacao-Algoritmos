function verificarPalindromo() {
    var inFrase = document.getElementById('inFrase');
    var outResposta = document.getElementById('outResposta');

    var frase = inFrase.value;

    if(frase=='') {
        alert('Insira uma frase válida!');
        inFrase.focus();
        return;
    }

    var newFrase = frase.replace(/ /g, '');
    var tam = newFrase.length;
    var metade = Math.floor(tam/2);
    var cont = 0; 
    var resposta = '';


    if(tam%2==0) {
        for(var i = 0; i<metade; i++) {
            if(newFrase.charAt(i) == newFrase.charAt(tam-(i+1))) {
                cont++;
            }
        }
    } else {
        for(var i = 1; i<=(metade); i++) {
            if(newFrase.charAt(metade-i) == newFrase.charAt(metade+i)) {
                cont++;
            }
        }
    }

    if((cont==metade) || (cont==(tam-1)/2)) {
        resposta = frase.toUpperCase()+' é um palíndromo';
    } else {
        resposta = frase.toUpperCase()+' não é um palíndromo';
    }

    outResposta.textContent = resposta;
    inFrase.focus();
}
var btnVericarFrase = document.getElementById('btnVerificarFrase');
btnVericarFrase.addEventListener('click', verificarPalindromo);