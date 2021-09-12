// Exercício: Funções Simples:

// 1) Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

let conversionToCm = function (x){
    return x * 2.54;
};

conversionToCm(3.73);
console.log(conversionToCm(3.73));

// 2) Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"

let conversionToURL = function (x){
    return 'http://www.' + x + '.com.br';
};

conversionToURL('funcaojs');
console.log(conversionToURL('funcaojs'));

// 3) Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

let conversionWithExclamationMark = function (x){
    return x + '!';
};

conversionWithExclamationMark('A aula de "CTD - Programação Imperativa" é muito divertida');
console.log(conversionWithExclamationMark('A aula de "CTD - Programação Imperativa" é muito divertida'));

// 4) Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.

let conversionToDogAge = function (x){
    return x * 7;
};

conversionToDogAge(4);
console.log(conversionToDogAge(4));

// 5) Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.

let conversionToWorkHourValue = function (x){
    return x / 160;
};

conversionToWorkHourValue(4000);
console.log(conversionToWorkHourValue(4000));

// 6) Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

let conversionToIMC = function (p,h){
    return p / ((h/100)*(h/100));
};

conversionToIMC(62,161);
console.log(conversionToIMC(62,161));

// 7) Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.

let conversionToUpperCase = function (x){
    return x.toUpperCase();
};

conversionToUpperCase("Certified Tech Developer");
console.log(conversionToUpperCase("Certified Tech Developer"));

// 8) Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
//Dica: Isso te ajudará a entender o que o operador typeof faz.

let conversionToDataType = function (x){
    return typeof(x);
};

conversionToDataType(3.7);
console.log(conversionToDataType(3.7));

// 9) Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

let conversionToCircumference = function (x){
    return 2* Math.PI * x;
};

conversionToCircumference(3);
console.log(conversionToCircumference(3));