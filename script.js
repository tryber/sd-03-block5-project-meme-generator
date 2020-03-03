// Elementos

let texto = document.querySelector('.texto');
let textInput = document.querySelector('#text-input');
let fileInput = document.querySelector('#meme-insert');
let container = document.querySelector('#meme-image-container');
const botaoBD1 = document.querySelector('#button1');
const botaoBD2 = document.querySelector('#button2');
const botaoBD3 = document.querySelector('#button3');


// Eventos

textInput.addEventListener('input', escreverTexto);
fileInput.addEventListener('change', carregaImagem);
botaoBD1.addEventListener('click', alterarBorda);
botaoBD2.addEventListener('click', alterarBorda);
botaoBD3.addEventListener('click', alterarBorda);

// Funções

function escreverTexto() {
  texto.innerHTML = textInput.value;
}

function carregaImagem() {
  let arquivo = this.files[0];
  let img = document.getElementById('meme-image');
  img.src = URL.createObjectURL(arquivo);
}

function alterarBorda(event){
  event.preventDefault();
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

