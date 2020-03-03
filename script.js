// Elementos

let texto = document.querySelector('.texto');
let textInput = document.querySelector('#text-input');
let fileInput = document.querySelector('#meme-insert');
let container = document.querySelector('#meme-image-container');
const botaoBD1 = document.querySelector('#button1');
const botaoBD2 = document.querySelector('#button2');
const botaoBD3 = document.querySelector('#button3');
const img1 = document.querySelector('#meme1');
const img2 = document.querySelector('#meme2');
const img3 = document.querySelector('#meme3');
const img4 = document.querySelector('#meme4');


// Eventos

textInput.addEventListener('input', escreverTexto);
fileInput.addEventListener('change', carregaImagem);
botaoBD1.addEventListener('click', alterarBorda);
botaoBD2.addEventListener('click', alterarBorda);
botaoBD3.addEventListener('click', alterarBorda);
img1.addEventListener('click', carregaImagem);
img2.addEventListener('click', carregaImagem);
img3.addEventListener('click', carregaImagem);
img4.addEventListener('click', carregaImagem);

// Funções

function escreverTexto() {
  texto.innerHTML = textInput.value;
}

function carregaImagem(event) {
  if(event.currentTarget.id == 'meme-insert'){
    let arquivo = this.files[0];
    let img = document.getElementById('meme-image');
    img.src = URL.createObjectURL(arquivo);
  } else {
    let arquivo = event.currentTarget.src;
    let img = document.getElementById('meme-image');
    img.src = event.currentTarget.src;
  }
}

function alterarBorda(event){
  let quemChamou = event.currentTarget.id

  switch (quemChamou) {
    case 'button1':
      container.style.border = "3px dashed red"
      break;
    case 'button2':
      container.style.border = "5px double blue"
      break;
    case 'button3':
      container.style.border = "6px groove green"
      break;

    default:
        alert('Não está funcionando')
      break;
  }
}