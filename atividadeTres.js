console.clear();
var teclado = require("prompt-sync")();
var numero1 = parseFloat(teclado("digite um numero: "));
console.clear();
var media = 0;
media = (numero1 * 9 / 5) + 32;
console.log(media);
