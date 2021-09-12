// Exercício “Pode Subir”:
// Em um parque de diversões nos pedem um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.

// 1)	Crie uma função podeSubir() que receba dois parâmetros: 
// -	altura da pessoa;
// -	se está acompanhada.

// Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não, baseado nas seguintes condições:
// a)	A pessoa deve medir igual ou mais de 1.40m e igual ou menos de 2 metros.
// b)	Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
// c)	Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.

// function podeSubir(altura, estaAcompanhada){
//     let podeSubir;

//     if(altura >= 1.4 && altura <= 2.0){
//         podeSubir = true;

//     } else if(altura >= 1.2 && altura < 1.4 && estaAcompanhada){
//         podeSubir = true;

//     } else {
//         podeSubir = false;
//     }
//     return podeSubir;
// }
// console.log(podeSubir(1.3, 'Paty'));

// 2)	Modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior. Por exemplo:
// a)	Em caso de autorização, exiba a mensagem: “Acesso autorizado” ou “Acesso autorizado somente com acompanhante”;
// b)	Em caso de impedimento, exiba a mensagem: “Acesso negado.”


function podeSubir(altura, estaAcompanhada){
    let msg;

    if(altura >= 1.4 && altura <= 2.0){
        msg = console.log('Acesso autorizado.');

    } else if(altura >= 1.2 && altura < 1.4 && estaAcompanhada){
        msg = console.log('Acesso autorizado somente com acompanhante.');

    } else {
        msg = console.log('Acesso negado.');

    }
    return msg;
}
podeSubir(1.6);
podeSubir(1.3);
podeSubir(1.3, 'Paty');
podeSubir(1.19);
podeSubir(1.19, 'Paty');