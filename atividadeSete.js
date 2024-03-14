var teclado = require("prompt-sync")();
var x = 1;
var contaAte = parseFloat(teclado("Digite o valor do contador: "));
while (x != contaAte) {
    console.log("Contador esta em ".concat(x));
    x++;
}
