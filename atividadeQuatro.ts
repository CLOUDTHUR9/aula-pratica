console.clear();
let teclado = require(`prompt-sync`)();

let temperaturaF: number = parseFloat(teclado(`digite um numero: `));
let convertidaC: number = (5/9) *  (temperaturaF - 32);
;


console.log(`a temperatura é ${temperaturaF}°F e ${convertidaC}°C`);