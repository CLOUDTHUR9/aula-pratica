const teclado = require (`prompt-sync`)();
let x: number = 1;
let contaAte: number = parseFloat(teclado(`Digite o valor do contador: `));

while (x != contaAte){

console.log(`Contador esta em ${x}`);
x++;
}