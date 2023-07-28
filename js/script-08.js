const contratadoEm = 2013;
const anoAtual = 2023;

const salarioInicial = 1000;
let salario = salarioInicial;
let percentualAumento = 1.5 / 100;

console.log(`Ano atual: ${contratadoEm}`);
console.log(`O salário atual é: R$${salario.toFixed(2)}`);

for (let ano = contratadoEm + 1; ano <= anoAtual; ano++) {
   if (ano >= 2017) {
     percentualAumento = percentualAumento * 2;
   }
   salario = salario + (salario * percentualAumento);
  console.log(`\n\nAno atual: ${ano}`);
   console.log(`O percentual de aumento foi ${percentualAumento * 100}%`);
   console.log(`O salário atual é: R$${salario.toFixed(2)}`);
 }
 const percentualAumentoTotal = (salario / salarioInicial) * 100;
 console.log(`\n\nEm comparação ao seu salário inicial, você teve um aumento de ${percentualAumentoTotal.toFixed(2)}%`);