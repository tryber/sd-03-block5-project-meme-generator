let imagem = document.getElementById("meme-image")
let texto = document.getElementById("text-input")
let memetext = document.getElementById("meme-text")

texto.addEventListener('keyup', memeTexto)

function memeTexto() {
	memetext.innerHTML = texto.value
}