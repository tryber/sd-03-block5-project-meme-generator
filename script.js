let fotoNaTela = document.getElementById("meme-image");
let fotoEscolhida = document.getElementById("meme-insert");

function memeImage() {
    fotoNaTela.src =  URL.createObjectURL(fotoEscolhida.files[0]);
}
fotoEscolhida.addEventListener("input", memeImage);


let textoNaFoto = document.getElementById("meme-text");
let textoDigitado = document.getElementById("text-input");

function memeText() {
    textoNaFoto.innerHTML = textoDigitado.value;
}
textoDigitado.addEventListener("keyup", memeText);
