console.clear();
let teclado = require(`prompt-sync`)();

let numero1: number = parseFloat(teclado(`digite um numero: `));

console.clear();
let media: number = 0;
media = (numero1 * 9/5)+32;

console.log(media);
