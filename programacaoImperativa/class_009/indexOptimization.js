/*
1 ͦ  Checkpoint de programação imperativa
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

// Quando temos que escolher uma opção dentre outras, é mais fácil utilizar o switch

function microondas(comida,tempo){

    let tempoPadrao = 0;

    switch(comida){
        case 1:
            tempoPadrao = 10;
            console.log("Pipoca");
            break;
        case 2:
            tempoPadrao = 8;
            console.log("Macarrão");
            break;
        case 3:
            tempoPadrao = 15;
            console.log("Carne");
            break;
        case 4:
            tempoPadrao = 12;
            console.log("Feijão");
            break;
        case 5:
            tempoPadrao = 8;
            console.log("Brigadeiro");
            break;
            default:
                console.log("Prato inexistente");
                return;
    }

// if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
//     console.log("A comida queimou!");
// } else if(tempo < tempoPadrao){
//     console.log("Tempo insuficiente!");
// } else if(tempo > 3*tempoPadrao){
//     console.log("Kabumm!");
// }

function verificaTempo(tempo,tempoPadrao){
    if(tempo > 2*tempoPadrao && tempo <= 3*tempoPadrao){
        console.log("A comida queimou!");
    } else if(tempo < tempoPadrao){
        console.log("Tempo insuficiente!");
    } else if(tempo > 3*tempoPadrao){
        console.log("Kabumm!");
    }
}

verificaTempo(tempo,tempoPadrao);

console.log("Prato pronto, bom apetite!!!");

// if(comida === 1){

// } else if(comida === 2){

// } else if(comida === 3){
    
// } else if(comida === 4){
    
// } else if(comida === 5){
    
// } else {
//     console.log("Prato inexistente")
// }


}
microondas(5,300);