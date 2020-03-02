const memeImageContainer = document.getElementById('meme-image-container');
const imageSpace = document.getElementById('meme-image');

function adicionaImagem() {
  const imageInput = document.getElementById('meme-insert');
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

function estilizarBorda() {
  const tipo1 = document.getElementById('button1');
  const tipo2 = document.getElementById('button2');
  const tipo3 = document.getElementById('button3');

  tipo1.addEventListener('click', () => {
    memeImageContainer.style.border = '3px dashed red'
  });

  tipo2.addEventListener('click', () => {
    memeImageContainer.style.border = '5px double blue'
  });

  tipo3.addEventListener('click', () => {
    memeImageContainer.style.border = '6px groove green'
  });
}

estilizarBorda();

function addImagesADisposicao() {
  const boxImages = document.getElementById('images');
  for (let i = 0; i < boxImages.children.length; i += 1) {
    boxImages.children[i].addEventListener('click', (event) => {
      imageSpace.src = event.target.src
    });
  }
}

addImagesADisposicao();
