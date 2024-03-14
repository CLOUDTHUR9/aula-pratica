var teclado = require("prompt-sync")();
console.clear();
console.log(" ");
var dividendo = parseFloat(teclado("digite o dividendo: "));
var divisor = parseFloat(teclado("digite o divisor: "));
var resto = 0;
var quociente = 0;
resto = dividendo % divisor;
quociente = dividendo / divisor;
console.clear();
console.log("dividendo ".concat(dividendo, "\ndivisor ").concat(divisor, "\nresto da divis\u00E3o: ").concat(resto, "\nquociente ").concat(quociente, "\n"));
if (resto == 0) {
    console.log("Numero par!");
}
else if (resto == 1) {
    console.log("Numero impar!");
}
else {
    console.log("Algo deu errado!!");
}
