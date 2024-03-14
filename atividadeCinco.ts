const teclado = require (`prompt-sync`)();
console.clear();

console.log(` `)

let idade : number=parseFloat(teclado(`Digite sua idade: `));


console.clear();
console.log(` `)
if (idade>=18){
console.log(`Maior de idade!!`);

}
else{
    console.log(`Menor de idade!!`);
}