let texto = document.getElementById("text-input")

function escreveText() {
  document.getElementById("meme-text").innerHTML = texto.value;
}

texto.addEventListener("keyup", escreveText);
