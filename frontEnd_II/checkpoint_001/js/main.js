let tituloReferencia = document.querySelector('#titulo')
let descricaoReferencia = document.querySelector('#descricao')
let imagemReferencia = document.querySelector('#imagem')
let botaoSalvarReferencia = document.querySelector('#botaoSalvar')
let bodyReferencia = document.querySelector('body')
let mudarTemaBotaoReferencia = document.querySelector('#botaoMudarTema')

let controladoresReferencia = document.querySelectorAll('.controlador')

// console.dir(controladoresReferencia)

for (let controladorReferencia of controladoresReferencia) {

    let inputReferencia = controladorReferencia.children[0]

    inputReferencia.addEventListener('keyup', function (event) {

        if (inputReferencia.checkValidity()) {

            controladorReferencia.classList.remove('erro')
            botaoSalvarReferencia.disabled = false

        } else {

            controladorReferencia.classList.add('erro')
            botaoSalvarReferencia.disabled = true

        }

    })

    console.dir(inputReferencia)

    // console.log(controladorReferencia)

}




function changeTheme() {

    bodyReferencia.classList.toggle('dark')

    if (bodyReferencia.classList.contains('dark')) {

        mudarTemaBotaoReferencia.innerText = '☀️'

    } else {

        mudarTemaBotaoReferencia.innerText = '🌙'

    }

}


botaoSalvarReferencia.addEventListener('click', function () {
    if (tituloReferencia.value === '') return alert("Por favor, preencha todos os campos.")
    else if (descricaoReferencia.value === '') return alert("Por favor, preencha todos os campos.")
    else if (imagemReferencia.value === '') return alert("Por favor, preencha todos os campos.")

    if (window.confirm(`Deseja realmente criar um post sobre ${tituloReferencia.value}?`)) {


        let card = {
            imagem: imagemReferencia.value,
            titulo: tituloReferencia.value,
            descricao: descricaoReferencia.value
        }


        let conteudoPrincipalReference = document.querySelector('#conteudoPrincipal')


        let cards = [
            conteudoPrincipalReference.innerHTML += `
        <div class="item">
        <img src="${card.imagem}">
        <h3> ${card.titulo} </h3>
        <p> ${card.descricao} </p>
        </div>
        `
        ]


        cards.push(card)

        console.log(card)

        cards = []
        tituloReferencia.value = '';
        descricaoReferencia.value = '';
        imagemReferencia.value = '';
    }
})


botaoSalvarReferencia.addEventListener('click', function (event) {

    event.preventDefault();
})