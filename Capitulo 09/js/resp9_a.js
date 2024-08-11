// GERAR VELAS
function gerarVelas() {
    var inIdade = document.getElementById('inIdade');
    var idade = inIdade.value;

    if(idade<1 || idade>120 || idade=='' || isNaN(idade)) {
        alert('Insira uma idade de 1 a 120 anos');
        inIdade.focus();
        return;
    }

    var divIdade = document.getElementById('divIdade');
    divIdade.textContent = '';

    for(var i = 0; i<idade.length; i++) {
        var digito = idade.charAt(i); 
        var img = document.createElement('img');
        img.src = 'img/'+digito+'.jpg';
        img.alt = 'Dígito'+digito;

        divIdade.appendChild(img);
    }
}
var btnExibir = document.getElementById('btnExibir');
btnExibir.addEventListener('click', gerarVelas);


// GERAR NOVAS IDADES
var btnGerarVelas = document.getElementById('btnGerarVelas');
btnGerarVelas.addEventListener('click', function() {
    location.reload();
})