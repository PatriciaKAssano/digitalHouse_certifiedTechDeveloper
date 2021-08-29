// // Exercício: Funções e Procedimentos:

// Exemplo: Exemplo: Math

Math.random();
console.log( Math.random() );

// Exercício: Definindo e invocando uma função:

function cumprimentar(x) {
    console.log(`Olá, ${x}, seja bem vindo(a)!`);
   }
   
   cumprimentar("Patricia");

// Exercício: Um case estranho:

function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo! ";
    console.log(mensagem + nome);
   }
   
   cumprimentarA("William");
   cumprimentarA("Danilo");

   // Exercício: Funções que retornam valor:

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5;
   }
   multiplicarPorDoisESomarCinco(1);
   multiplicarPorDoisESomarCinco(5);
   //multiplicarPorDoisESomarCinco(Erick) // Erick não é um número
   const Erick = 5;
   multiplicarPorDoisESomarCinco(Erick); //agora sim

   console.log(multiplicarPorDoisESomarCinco(Erick));
   
   const valor = multiplicarPorDoisESomarCinco(Erick);
   console.log(valor);