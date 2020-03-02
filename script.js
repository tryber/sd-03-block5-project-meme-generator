const memeImageContainer = document.getElementById('meme-image-container');

function adicionaImagem() {
  const imageInput = document.getElementById('meme-insert');
  const imageSpace = document.getElementById('meme-image');
  imageInput.addEventListener('change', (event) => {
    imageSpace.src = URL.createObjectURL(event.target.files[0]);
    memeImageContainer.style.border = '1px solid black'
  });
}

adicionaImagem();

function adicionaFraseNaImagem() {
  const textSpace = document.getElementById('text-input');
  const fraseMemeNoParagrafo = document.getElementById('meme-text');
  memeImageContainer.appendChild(fraseMemeNoParagrafo);
  textSpace.addEventListener('keyup', () => {
    fraseMemeNoParagrafo.innerText = textSpace.value;
  });
}

adicionaFraseNaImagem();
