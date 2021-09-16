// Turma: NT01
// Room: 02
// Integrantes: David Franklin, Gabriel Bernardo, Harry Möbbs Júnior, Henrique Brumatti, Patricia Kushima Assano


// function fizzBuzz(a,b){
//     for(i = 1; i < 101; i++){
//         if(i % a == 0 && i % b == 0){
//             console.log("FizzBuzz");
//         } else if(i % b == 0){
//             console.log("Buzz");
//         } else if(i % a == 0){
//             console.log("Fizz");
//         } else{
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(2,6);

// let fizzBuzz = (a, b) => {
//     for (i = 1; i < 101; i++) {
//         if (i % a == 0 && i % b == 0) {
//             console.log("FizzBuzz");
//         } else if (i % b == 0) {
//             console.log("Buzz");
//         } else if (i % a == 0) {
//             console.log("Fizz");
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz(2,3);

let fizzBuzz = (a, b, palavra1, palavra2) => {
    for (i = 1; i < 101; i++) {
        if (i % a == 0 && i % b == 0) {
            console.log(`${palavra1}${palavra2}`);
        } else if (i % b == 0) {
            console.log(`${palavra2}`);
        } else if (i % a == 0) {
            console.log(`${palavra1}`);
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(2,3,"D","H");