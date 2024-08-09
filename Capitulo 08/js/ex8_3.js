// INCLUIR APOSTA
function incluirAposta() {
    var inNome = document.getElementById('inNome');
    var inPeso = document.getElementById("inPeso");

    var nome = inNome.value;
    var peso = Number(inPeso.value);

    if(nome=='' || peso<=0 || isNaN(peso) || !isNaN(nome)) {
        alert('Informe o nome e o peso da aposta');
        inNome.focus();
        return;
    }

    if(verApostaExiste(peso)) {
        alert('Alguém já apostou esse peso, informe outro');
        inPeso.focus();
        return;
    }

    if(localStorage.getItem('melanciaNome')) {
        var melanciaNome = localStorage.getItem('melanciaNome')+';'+nome;
        var melanciaPeso = localStorage.getItem('melanciaPeso')+';'+peso;

        localStorage.setItem('melanciaNome', melanciaNome);
        localStorage.setItem('melanciaPeso', melanciaPeso);
    } else {
        localStorage.setItem('melanciaNome', nome);
        localStorage.setItem('melanciaPeso', peso);
    }
    mostrarApostas();

    inNome.value = '';
    inPeso.value = '';
    inNome.focus();
}
var btnApostar = document.getElementById('btnApostar');
btnApostar.addEventListener('click', incluirAposta);


// VERIFICAR SE EXISTE APOSTA
function verApostaExiste(peso) {
    var existe = false;

    if(localStorage.getItem('melanciaPeso')) {
        var pesos = localStorage.getItem('melanciaPeso').split(';');

        if(pesos.indexOf(peso.toString()) >= 0) {
            existe = true;
        }
    }

    return existe;
}


// MOSTRAR APOSTAS
function mostrarApostas() {
    var outApostas = document.getElementById('outApostas');

    if(!localStorage.getItem('melanciaNome')) {
        outApostas.textContent = '';
        return;
    }

    var nomes = localStorage.getItem('melanciaNome').split(';');
    var pesos = localStorage.getItem('melanciaPeso').split(';');
    var linhas = '';

    for(var i = 0; i<nomes.length; i++) {
        linhas += nomes[i]+' - '+pesos[i]+'g\n';
    }

    outApostas.textContent = linhas;
}
mostrarApostas();


// VEFIRICAR VENCEDOR
function verificarVencedor() {
    if(!localStorage.getItem('melanciaNome')) {
        alert('Não há apostas cadastradas');
        return;
    }

    var pesoCorreto = Number(prompt('Qual o peso correto da melancia?'));

    if(pesoCorreto==0 || isNaN(pesoCorreto)) {
        return;
    }

    var nomes= localStorage.getItem('melanciaNome').split(';');
    var pesos = localStorage.getItem('melanciaPeso').split(';');

    var vencedorNome = nomes[0];
    var vencedorPeso = Number(pesos[0]);

    for(var i = 0; i<nomes.length; i++) {
        difVencedor = Math.abs(vencedorPeso-pesoCorreto);
        difAposta = Math.abs(Number(pesos[i])-pesoCorreto);

        if(difAposta<difVencedor) {
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }

    var mensagem = 'Resultado - Peso correto: '+pesoCorreto+'g';
    mensagem += '\n---------------------------------------------------\n';
    mensagem += '\nVencedor: '+vencedorNome;
    mensagem += '\nAposta: '+vencedorPeso+'g';
    alert(mensagem);
}
var btbVencedor = document.getElementById('btnVencedor');
btbVencedor.addEventListener('click', verificarVencedor);


// LIMPAR APOSTAS
function limparApostas() {
    if(confirm('Confirma exclusão de todas as apostas?')) {
        localStorage.removeItem('melanciaNome');
        localStorage.removeItem('melanciaPeso');
        mostrarApostas();
    }
}
var btnLimpar = document.getElementById('btnLimpar');
btnLimpar.addEventListener('click', limparApostas);