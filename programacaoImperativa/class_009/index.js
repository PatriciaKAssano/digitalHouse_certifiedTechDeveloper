// Tempo para construção do código: até 22:20
// Tempo para teste e correções do código: até 22:40
// Turma: 01 NT
// Integrantes: Alisson Pinho, Hiego Willy, Jhonathan Weber, Patricia Kushima Assano, Yasmin Lorraine

// 1 ͦ  Checkpoint de programação imperativa
// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function rapidFood(opcao, tempo) {
    let msg;
  
  if (opcao > 5) {
    msg = ("Prato inexistente!");
  } else if (opcao <= 5) {
    if (opcao == 1) {
      if (tempo > 20 && tempo <= 30) {
        msg = ("A comida queimou!");
      } else if (tempo < 10) {
        msg = ("Tempo insuficiente!");
      } else if (tempo > 30) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    } else if (opcao == 2 || opcao == 5) {
      if (tempo > 16 && tempo <= 24) {
        msg = ("A comida queimou!");
      } else if (tempo < 8) {
        msg = ("Tempo insuficiente!");
      } else if (tempo > 24) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    } else if (opcao == 3) {
      if (tempo > 30 && tempo <= 45) {
        msg = ("A comida queimou!");
      } else if (tempo < 15) {
        msg = ("Tempo insuficiente!");
      } else if (tempo > 45) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    } else if (opcao == 4) {
      if (tempo > 24 && tempo <= 36) {
        msg = ("A comida queimou!");
      } else if (tempo < 12) {
        msg = ("Tempo insuficiente!");
      } else if (tempo > 36) {
        msg = ("Kabumm!");
      } else {
        msg = ("Prato pronto, bom apetite!!!");
      }
    }
  }
  return msg;
 }
  
 /*console.log("1: Pipoca");
 console.log("2: Macarrão");
 console.log("3: Carne");
 console.log("4: Feijão");
 console.log("5: Brigadeiro");*/
  
 console.log(rapidFood(1, 20));