function mostarDados() {
    var inModelo = document.getElementById('inModelo');
    var inAno = document.getElementById('inAno');
    var inPreco = document.getElementById('inPreco');
    var outClassif = document.getElementById('outClassif');
    var outPrecoVenda = document.getElementById('outPrecoVenda');

    var modelo = inModelo.value;
    var ano = Number(inAno.value);
    var preco = Number(inPreco.value);

    var anoAtual = new Date().getFullYear();

    if(modelo=='' || ano<=0 || ano>anoAtual || preco <=0 || isNaN(ano) || isNaN(preco)) {
        alert('Informe corretamente os dados do veículo.');
        inModelo.focus();
        return;
    }   

    var classificacao = classificarVeiculo(ano);
    var precoVenda = calcularVenda(preco, classificacao);

    outClassif.textContent = modelo+' - '+classificacao;
    outPrecoVenda.textContent = 'Preço de venda R$: '+precoVenda.toFixed(2);
}
var btnCalcular = document.getElementById('btnCalcularPreco');
btnCalcular.addEventListener('click', mostarDados);

function classificarVeiculo(ano) {
    var anoAtual = new Date().getFullYear();
    var classif;

    if(ano==anoAtual) {
        classif = 'Novo';
    } else if(ano==anoAtual-1 || ano==anoAtual-2) {
        classif = 'Seminovo';
    } else {
        classif = 'Usado';
    }
    return classif;
}

function calcularVenda(valor, status) {
    var prVenda = (status=='Novo') ? valor*1.08 : valor*1.10;
    return prVenda;
}