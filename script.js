let caixaTexto = document.querySelector("#text-input")
caixaTexto.addEventListener("input", criarTexto)

let texto = document.querySelector(".texto")

let x = document.getElementById("meme-insert")
x.addEventListener("change", carregarImagem)

function carregarImagem() {
  let arquivo = this.files[0]
  let img = document.getElementsByTagName("img")
  img[0].src = URL.createObjectURL(arquivo)
}

function criarTexto() {
  texto.innerHTML = caixaTexto.value
}
