// Turma: NT 01
// Room: 08
// Integrantes: Harry Möbbs Júnior, Juan Barcelos, Lucas Bernardo, Patricia Kushima Assano

const alice = [23, 69, 32]; // Alice fez 2 pontos ao total
const bob = [12, 67, 43]; // Bob fez 1 ponto ao total

 function encontrarGanhador(alice, bob) {
    //solução
    let pontosAlice = 0;
    let pontosBob = 0;

    if(alice.length === bob.length){

    for(let i = 0; i < alice.length; i++){
        if(alice[i] > bob[i]){
            pontosAlice == pontosAlice ++;
        } else if(alice[i] < bob[i]){
            pontosBob == pontosBob ++;
        }

    }
    if(pontosAlice > pontosBob){
        console.log("A ganhadora é a: Alice");
    } else if(pontosAlice < pontosBob){
        console.log("O ganhador é o: Bob");
    } else{
        console.log("Houve um empate!");
    }
    return
}
 }
encontrarGanhador(alice, bob);