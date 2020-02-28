let textoForm = document.querySelector('#text-input');
let textoCaixa = document.querySelector('.textoNaImagem');

function colocaTextoCaixa() {
  textoCaixa.innerText = textoForm.value;
}

textoForm.addEventListener('keyup', colocaTextoCaixa);

let recebeFoto = document.querySelector('#meme-image');
let botaoFoto = document.querySelector('#botaoFoto');

function loadImage(event) {
  recebeFoto.src = window.URL.createObjectURL(event.target.files[0]);
}
botaoFoto.addEventListener('change', loadImage);