let texto = document.getElementById("text-input")
let textOutput = document.getElementById("meme-text")

texto.addEventListener("keyup", escreveText);

function escreveText() {
  textOutput.innerHTML = texto.value;
}

