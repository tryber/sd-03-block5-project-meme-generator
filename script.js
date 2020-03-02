

function adicionaImagem() {
  const imageInput = document.getElementById('meme-insert');
  const imageSpace = document.getElementById('meme-image');
  imageInput.addEventListener('change', (event) => {
    imageSpace.src = URL.createObjectURL(event.target.files[0]);
  });
}

adicionaImagem();



function adicionaFraseNaImagem() {
  const textSpace = document.getElementById('text-input');
  const memeImageContainer = document.getElementById('meme-image-container');
  const fraseMemeNoParagrafo = document.getElementById('meme-text');
  memeImageContainer.appendChild(fraseMemeNoParagrafo);
  textSpace.addEventListener('keyup', () => {
    fraseMemeNoParagrafo.innerText = textSpace.value;
  });
}

adicionaFraseNaImagem();
