var erros = [];
var sorteado = Math.floor(Math.random()*100+1);
const CHANCES = 6;

function apostarNumero() {
    var inNumero = document.getElementById('inNumero');
    var numero = Number(inNumero.value);

    if(numero <= 0 || numero>100 || isNaN(numero)) {
        alert('Informe um número válido.');
        inNumero.value = '';
        inNumero.focus();
        return;
    }

    var outDica = document.getElementById('outDica');
    var outerros = document.getElementById('outErros');
    var outChances = document.getElementById('outChances');

    if(numero == sorteado) {
        alert('Parabéns! Você acertou!');
        btnApostar.disabled = true;
        btJogar.className = 'exibe';
        outDica.textContent = "Parabens! Número sorteado: "+sorteado;
    } else {
        i
    }
}
var btnApostar = document.getElementById('btnApostar');
btnApostar.addEventListener('click', apostarNumero);