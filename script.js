// Elementos

let texto = document.querySelector(".texto")
let textInput = document.querySelector("#text-input")
let fileInput = document.querySelector("#meme-insert")
console.log(texto)
console.log(textInput)
console.log(fileInput)

// Eventos

textInput.addEventListener("input",escreverTexto)
fileInput.addEventListener("change", carregaImagem)

// Funções

function escreverTexto(){
    texto.innerHTML=textInput.value
}

function carregaImagem(){
    let arquivo = this.files[0]
    let img = document.getElementById("meme-image")
    img.src = URL.createObjectURL(arquivo)
    // img[0].src = URL.createObjectURL(arquivo)
}