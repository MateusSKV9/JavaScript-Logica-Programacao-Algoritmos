// RETORNAR TRAÇOS
function retornarTracos(nomeAluno) {
    var partes = nomeAluno.split(' ');
    var tam = partes.length;
    var linha = '';

    for(var  i = 0; i<tam; i++) {
        for(var j = 0; j<partes[i].length; j++) {
            linha += '-';
        }
        linha += ' '
    }
    
    return linha;
}

// CATEGORIZAR ALUNO
function categorizarAluno(numero) {
    var categoria;

    if(numero<=12) {
        categoria = 'Infantil';
    } else if(numero<=18) {
        categoria = 'Juvenil';
    } else {
        categoria = 'Adulto';
    }

    return categoria;
}

// INFORMAÇÕES ATLETA
function categorizarAtleta() {
    var inIdade = document.getElementById('inIdade');
    var inNome = document.getElementById('inNome');
    var outInfor = document.getElementById('outInfor');

    var idade = Number(inIdade.value);
    var nome = inNome.value;

    if(nome=='' || !isNaN(nome) || isNaN(idade) || idade<=0) {
        alert('Preencha corretamente os campos.');
        inNome.focus();
        return;
    } 

    outInfor.textContent = nome;
    outInfor.textContent += '\n'+retornarTracos(nome);
    outInfor.textContent += '\nCategoria: '+categorizarAluno(idade);
}
var btnCategorizar = document.getElementById('btnCategorizar');
btnCategorizar.addEventListener('click', categorizarAtleta);