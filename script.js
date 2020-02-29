// let memeImage = document.querySelector('#meme-image');
// let memeInsert = document.querySelector('#meme-insert');
let loadFile = function (event) {
  let image = document.getElementById('meme-image');
  image.src = URL.createObjectURL(event.target.files[0]);
};

function escreveCaixaImagem() {
  let caixaTexto = document.getElementById('text-input');
  let tagP = document.getElementById('texto-imagem');
  tagP.innerText = caixaTexto.value;
}
