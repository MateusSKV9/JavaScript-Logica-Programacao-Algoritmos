function calcularMulta() {
    var inData = document.getElementById('inData');
    var inValor = document.getElementById('inValor');
    var outData = document.getElementById('outData');
    var outValor = document.getElementById('outValor');

    var data = inData.value;
    var partes = data.split('-');
    var valor = inValor.value;

    
    if(inData.value == '' || valor<=0) {
        alert('Preencher todos os campos corretamente.');
        inData.focus();
        return;
    }

    var dia = partes[2];
    var mes = Number(partes[1]);
    var ano = partes[0];

    mes+=3;

    if(mes>12) {
        mes%=12;
        ano++;
    }

    if(mes<10) {
        mes = '0'+mes;
    }

    outData.textContent = '';
    outValor.textContent = '';

    outData.textContent = 'Data limite para pagamento com desconto: '+dia+'/'+mes+'/'+ano;
    outValor.textContent = 'Valor com desconto R$: '+(0.80*valor).toFixed(2);
}
var btnCalcular = document.getElementById('btnCalcular');
btnCalcular.addEventListener('click', calcularMulta);