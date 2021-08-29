// Exercício: Vamos fazer uma Calculadora

// Calculadora - Nível I:

// I.2) Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.

function adicionar(num1,num2){
    const resultadoI2 = num1 + num2;
    return resultadoI2;
}
console.log(adicionar(100,10))

// I.3) Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.

function subtracao(num1,num2){
    const resultadoI3 = num1 - num2;
    return resultadoI3;
}
console.log(subtracao(100,10));

// I.4) Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.

function multiplicacao(num1,num2){
    const resultadoI4 = num1 * num2;
    return resultadoI4;
}
console.log(multiplicacao(100,10));

// I.5) Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

function divisao(num1,num2){
    const resultadoI5 = num1 / num2;
    return resultadoI5;
}
console.log(divisao(100,10))

// Calculadora - Nível II:

/* II.1) No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------") */

console.log("-------------- Teste de Operações / Calculadora --------------")

// II.2) Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.

console.log(adicionar(100,10));
console.log(subtracao(100,10));

// II.3) Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(multiplicacao(100,10));

// II.4) Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.

console.log(divisao(100,10));

// II.5) Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.

console.log(divisao(100,0));
console.log(divisao(0,10));

// Calculadora - Nível III - Funções Extras:

/* III.1) Crie uma função chamada quadradoDoNumero, que recebe um número como
parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja,
ao quadrado.
Importante: quadradoDoNumero() deve usar a função multiplicação() para
calcular o quadrado do parâmetro inserido em power().*/

function quadradoDoNumero(num1){
    //const resultadoIII1 = num1 * num1;
    const resultadoIII1 = multiplicacao(num1, num1);
    return resultadoIII1;
}
console.log(quadradoDoNumero(100));

/* III.2) Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números,
que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções
criadas anteriormente em nossa calculadora.*/

function mediaDeTresNumeros(num1,num2,num3){
    //const resultadoIII2 = (num1 + num2 + num3) / 3;
    const resultadoIII2I = (adicionar(num1, num2) + adicionar(num2, num3) - num2);
    const resultadoIII2 = divisao(resultadoIII2I, 3);
    return resultadoIII2;
}
console.log(mediaDeTresNumeros(10, 25, 50));

/* III.3) Crie a função calculaPorcentagem, que receberá dois parâmetros: o número
total e a porcentagem que deseja calcular, e que deverá retornar x% de
totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15) (deve retornar 45, pois é 15% de 300).
Importante: calculaPorcentagem() você precisará usar algumas funções
criadas anteriormente em nossa calculadora.*/

function calculaPorcentagem(numTotal,porcentagem){
    //const resultadoIII3 = (porcentagem/100) * numTotal;
    const resultadoIII3I = divisao(porcentagem, 100);
    const resultadoIII3 = multiplicacao(resultadoIII3I, numTotal);
    return resultadoIII3;
}
console.log(calculaPorcentagem(300,15));

/* III.4) Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá
retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200).*/

function geradorDePorcentagem(num1,num2){
    const resultadoIII4 = (num1 / num2) * 100;
    return resultadoIII4;
}
console.log(geradorDePorcentagem(2,200));