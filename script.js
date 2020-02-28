let texto = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text");
let botao = document.getElementById("meme-insert")

texto.addEventListener("keyup", escreveText);

function escreveText() {
  textOutput.innerHTML = texto.value;
}
