var teclado = require("prompt-sync")();
console.clear();
console.log(" ");
var idade = 0;
var salario = 0;
var totPessoasNaCondicao = 0;
var numeroPessoasContabilizadas = 1;
console.log(" ");
while (numeroPessoasContabilizadas <= 5) {
    idade = parseInt(teclado("Digite a idade do funcionario ".concat(numeroPessoasContabilizadas, ": ")));
    salario = parseFloat(teclado("Digite o salario de um funcionario ".concat(numeroPessoasContabilizadas, ": ")));
    console.log(" ");
    if (idade < 30 && salario > 3000) {
        totPessoasNaCondicao++;
        numeroPessoasContabilizadas++;
    }
    else {
        numeroPessoasContabilizadas++;
    }
}
console.log("");
console.log("O total de pessoas que atende a condi\u00E7ao \u00E9 ".concat(totPessoasNaCondicao));
