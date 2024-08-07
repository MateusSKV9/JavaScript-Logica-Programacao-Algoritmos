var itens = [];

function trocarItem() {
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");

  if (pizza.checked) {
    inBebida.className = "oculta";
    inPizza.className = "exibe";
  } else {
    inPizza.className = "oculta";
    inBebida.className = "exibe";
  }
}
var pizza = document.getElementById("pizza");
pizza.addEventListener("change", trocarItem);

var bebida = document.getElementById("bebida");
bebida.addEventListener("change", trocarItem);

function mostrarNumSabores() {
    var inPizza = document.getElementById("inPizza");
    if(pizza.checked) {
      var tamPizza = inPizza.value;

      var num = (tamPizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;

      inDetalhes.placeholder = "Até " + num + " sabores";
  }
}

var inDetalhes = document.getElementById("inDetalhes");
inDetalhes.addEventListener("focus", mostrarNumSabores);

inDetalhes.addEventListener("blur", function () {
  inDetalhes.placeholder = "";
});

inDetalhes.addEventListener('keypress', function(tecla) {
  if(tecla.keyCode == 13) {
    adicionarItem();
  }
})

function adicionarItem() {
  var inPizza = document.getElementById('inPizza');
  var inBebida = document.getElementById('inBebida');
  var outPedidos = document.getElementById('outPedidos');

  if(inDetalhes.value=='' || !isNaN(inDetalhes.value)) {
    alert('Preencha corretamente');
    outPedidos.focus();
    return;
  }

  if(pizza.checked) {
    var num = inPizza.selectedIndex;
    var produto = inPizza.options[num].text;
  } else {
    var num = inBebida.selectedIndex;
    var produto = inBebida.options[num].text;
  }

  var detalhes = inDetalhes.value;
  itens.push(produto+'('+detalhes+')');
  outPedidos.textContent = itens.join('\n');
  limparCampos();
}
var btnAdicionar = document.getElementById('btnAdicionar');
btnAdicionar.addEventListener('click', adicionarItem);

function limparCampos() {
  var inPizza = document.getElementById("inPizza");
  var inBebida = document.getElementById("inBebida");
  pizza.checked = true;
  inBebida.className = 'oculta';
  inPizza.className = 'exibe';
  inPizza.selectdIndex = 0;
  inDetalhes.value = '';
  pizza.focus();
}