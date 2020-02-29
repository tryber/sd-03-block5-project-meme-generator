let texto = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text");
let botao = document.getElementById("meme-insert");
let imagem = document.getElementById("meme-imagem");

texto.addEventListener("keyup", escreveText);

function escreveText() {
  textOutput.innerHTML = texto.value;
}

let loadFile = function(event) {
  let image = document.getElementById("meme-image");
  image.src = URL.createObjectURL(event.target.files[0]);
};
