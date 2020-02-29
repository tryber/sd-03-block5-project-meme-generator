window.onload = function(){

let textInput = document.getElementById('text-input');
let imagemInput = document.getElementById('meme-insert');
let memeText = document.getElementById('meme-text');

function inserttext(){
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', inserttext);

function insertimage(){
  let memeImagem = document.getElementById('meme-image');
  memeImagem.src = URL.createObjectURL(imagemInput.files[0]);  
}

imagemInput.addEventListener('change', insertimage);
}

const meme1 = document.getElementById('meme1');
const meme2 = document.getElementById('meme2');
const meme3 = document.getElementById('meme3');
const meme4 = document.getElementById('meme4');
