let texto = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text");
let botao = document.getElementById("meme-insert");
let imagem = document.getElementById("meme-imagem")

texto.addEventListener("keyup", escreveText);

function escreveText() {
  textOutput.innerHTML = texto.value;
}

// function botaImg(){
//   botao.onclick
// }
// vamos fazer mais, ou chorar, o que for primeiro
