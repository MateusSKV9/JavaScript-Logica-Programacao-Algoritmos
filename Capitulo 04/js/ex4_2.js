function decrescer() {
    var inNumero = document.getElementById("inNumero");
    var outSequencia = document.getElementById("outSequencia");

    var numero = Number(inNumero.value);
    outSequencia.textContent = '';
    
    if(inNumero.value <=0  || isNaN(numero)) {
        alert("Insira um valor numérico.");
        inNumero.value = '';
        inNumero.focus();
        return;
    }
    
    outSequencia.textContent = "Entre "+numero+" e 1: ";

    for(var i = numero; i>=2; i--) {
        outSequencia.textContent += i+"👉🏼 ";
    }
    outSequencia.textContent += i+".";
}
var btnDecrescer = document.getElementById("btnDecrescer");
btnDecrescer.addEventListener('click', decrescer);