console.clear();
var teclado = require("prompt-sync")();
var temperaturaF = parseFloat(teclado("digite um numero: "));
var convertidaC = (5 / 9) * (temperaturaF - 32);
;
console.log("a temperatura \u00E9 ".concat(temperaturaF, "\u00B0F e ").concat(convertidaC, "\u00B0C"));
