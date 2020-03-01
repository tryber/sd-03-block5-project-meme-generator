// Elementos

let texto = document.querySelector(".texto")
let textInput = document.querySelector("#text-input")
console.log(texto)
console.log(textInput)

// Eventos

textInput.addEventListener("input",escreverTexto)


// Funções

function escreverTexto(){
    texto.innerHTML=textInput.value
}
