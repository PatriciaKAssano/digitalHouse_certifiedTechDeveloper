// Exercício 4: Um nutricionista enviou uma tabela com os dados de seus clientes e, você será responsável por calcular o Índice de Massa Corporal de cada registro:
// Quais são as variáveis? Quais são as constantes? De que tipo são? Qual variável poderia armazenar o valor null segundo estes dados?
// O Índice de Massa Corporal (IMC) se calcula dividindo o peso pela altura^2 (a altura deve estar em metros e o peso em quilogramas).

let nome1 = "José da Silva";
let idade1 = 27;
let peso1 = 83.5;
let altura1 = 1.70;
let plano1 = "TEM: Ouro";
let imc1 = peso1 / (altura1 * altura1);

let nome2 = "Carlos de Souza";
let idade2 = 28;
let peso2 = 80.1;
let altura2 = 1.76;
let plano2 = "TEM: Diamante";
let imc2 = peso2 / (altura2 * altura2);

let nome3 = "Aline Ferreira";
let idade3 = 33;
let peso3 = 63.7;
let altura3 = 1.53;
let plano3 = null;
let imc3 = peso3 / (altura3 * altura3);

let nome4 = "Ana Paula";
let idade4 = 26;
let peso4 = 55.0;
let altura4 = 1.62;
let plano4 = "TEM: Prata";
let imc4 = peso4 / (altura4 * altura4);

console.log(`${nome1} tem ${idade1} anos e seu índice de massa corporal é de ${imc1}`);

console.log(`${nome2} tem ${idade2} anos e seu índice de massa corporal é de ${imc2}`);

console.log(`${nome3} tem ${idade3} anos e seu índice de massa corporal é de ${imc3}`);

console.log(`${nome4} tem ${idade4} anos e seu índice de massa corporal é de ${imc4}`);