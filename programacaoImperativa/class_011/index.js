// Turma: NT 01
// Sala: 06
// Integrantes: Cleiton Bernsmuller, Flavio Rodrigues, Jhonathan Weber, 
// José Neto, Marcio Silva, Patricia Kushima Assano



// Ex: Ciclos e Repetições

//Ex. 1)
var array1 = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];
/*function converterAMaiusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
  }
  console.log(array)*/

function converterAMaiusculas(array1){
    for(let i = 0; i <= (array1.length - 1); i++){
        array1[i] = array1[i].toUpperCase();
        //console.log(array[i])
    }
    
    return array1;
}
console.log(converterAMaiusculas(array1))

// Ex. 2)
var array2 = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
/*function passagemDeElementos(array1, array2) { 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    array1.push(array2.pop().toUpperCase()) 
    return array1;
   }
console.log(passagemDeElementos(array1, array2));*/


   
function passagemDeElementos(array1, array2){
    let i = 0;
    let l = array2.length - 1;
   
    while(i <= l){

        array1.push(array2.pop().toUpperCase());
        i++;
    }
    return converterAMaiusculas(array1);
}
//console.log(passagemDeElementos(array1, array2))


// Ex. 3) 
    
function eliminaGame(array1, array2){
    
    array2.pop()
    
    let array4 = passagemDeElementos(array1, array2);

    return array4;
    
}
console.log(eliminaGame(array1, array2))


// Ex. 4)

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararNota(asiaScores, euroScores){
    let comparacao = [];

    for(let i = 0; i < asiaScores.length; i++){
        comparacao[i] = asiaScores[i] === euroScores[i];
    }
    return comparacao;
}
console.table(compararNota(asiaScores, euroScores))