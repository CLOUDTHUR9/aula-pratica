const teclado = require (`prompt-sync`)();
console.clear();

console.log(` `)



let dividendo: number = parseFloat(teclado(`digite o dividendo: `));
let divisor: number  = parseFloat(teclado(`digite o divisor: `));
let resto: number = 0;
let quociente: number =0;


resto = dividendo % divisor;
quociente = dividendo / divisor;
console.clear();


console.log(`dividendo ${dividendo}
divisor ${divisor}
resto da divisão: ${resto}
quociente ${quociente}
`);

if (resto == 0){

console.log(`Numero par!`);

}
else if (resto == 1){

    console.log(`Numero impar!`);

}
else{
    console.log(`Algo deu errado!!`);
}


