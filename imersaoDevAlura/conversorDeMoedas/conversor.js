var valorEmDolarTexto = prompt("Qual o valor em dólar você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto);

var valorEmReal = valorEmDolarNumero * 5.15;
var valorEmRealFixado = valorEmReal.toFixed(2);

alert("R$ " + valorEmRealFixado);