/* Ex1. O que cada expressão retorna?
Dê uma olhada nestes exemplos e pense sobre o que cada um retorna: */


!true // ---> false
!false // ---> true
!!false // ---> false
!!true // ---> true
!1 // ---> false
!!1 // ---> true
!0 // ---> true
!!0 // ---> false
!!"" // ---> false
 let x = 5 ; 
 let y = 9; 
   x < 10 && x!==5 // true && false ---> finalResult false
   x>9 || x===5 // false || true ---> finalResult true
   !(x===y) // !(false) ---> finalResult true

// =========================================================================================================================
/*Ex2. O que cada expressão retorna?
Sem testar no console, o que você acha que cada uma destas expressões irá retornar? Elas são true ou false? */

let x=10 // number
let y ="a" // 'string'
y==="b" || x >= 10 // ---> finalResult true
// false || true

let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y) // ---> finalResult false
// !(true || false) && !(false && true)
// !(true) && !(false)
//  false && true

let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito) // ---> finalResult false
// !((false || true) && true)
// !(true && true)
// !(true)       


/*
console.log(`1.1) !true: ${!true}`);
console.log(`1.2) !false: ${!false}`);
console.log(`1.3) !!false: ${!!false}`);
console.log(`1.4) !!true: ${!!true}`);
console.log(`1.5) !1: ${!1}`);
console.log(`1.6) !!1: ${!!1}`);
console.log(`1.7) !0: ${!0}`);
console.log(`1.8) !!0: ${!!0}`);
console.log(`1.9) !!"": ${!!""}`);
console.log(`1.10) x = 5, y = 9`);
console.log(`1.10.a) x < 10 && x !== 5: ${5 < 10 && 5 !==5}`);
console.log(`1.10.b) x > 9 || x === 5: ${5 > 9 || 5 === 5}`);
console.log(`1.10.c) !(x === y): ${!(5 === 9)}`);
console.log(`2) x = 10, y = "a"`);
console.log(`2.1) y === "b" || x >= 10: ${"a" === "b" || 10 >= 10}`);
console.log(`2.2) !(x == "3" || x === y) && !(y !== 8 && x <= y): ${!(10 == "3" || 10 === "a") && !("a" !== 8 && 10 <= "a")}`);
console.log(`2.3) str = "", msg = "haha!", eBonito = "false" \n !((str || msg) && eBonito): ${!(("" || "haha!") && "false")}`);
*/