const imageInput = document.getElementById('meme-insert');

const imageSpace = document.getElementById('meme-image');

const main = document.getElementById('main');

function adicionaImagem() {
  imageInput.addEventListener('change', (event) => {
    imageSpace.src = URL.createObjectURL(event.target.files[0]);
  });
}

adicionaImagem();

const textSpace = document.getElementById('text-input');

const memeImageContainer = document.getElementById('meme-image-container');

function adicionaFraseNaImagem() {
  const fraseMemeNoParagrafo = document.createElement('p');
  memeImageContainer.appendChild(fraseMemeNoParagrafo);
  textSpace.addEventListener('keyup', () => {
    fraseMemeNoParagrafo.innerText = textSpace.value;
  });
}

adicionaFraseNaImagem();
