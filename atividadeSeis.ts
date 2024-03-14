const teclado = require (`prompt-sync`)();
console.clear();

console.log(` `)

let idade: number = 0 ;
let salario: number = 0;
let totPessoasNaCondicao: number = 0 ;
let numeroPessoasContabilizadas: number = 1 ;


console.log(` `)



while (numeroPessoasContabilizadas <= 5){

    idade = parseInt(teclado(`Digite a idade do funcionario ${numeroPessoasContabilizadas}: `));
    salario = parseFloat(teclado(`Digite o salario de um funcionario ${numeroPessoasContabilizadas}: `));
    
    console.log(` `)

 if(idade < 30 && salario > 3000 ){ 
    totPessoasNaCondicao ++;
    numeroPessoasContabilizadas ++;

 }
else{
    numeroPessoasContabilizadas ++;
}
}
console.log(``);
console.log(`O total de pessoas que atende a condiçao é ${totPessoasNaCondicao}`);