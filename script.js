window.onload = function() {

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


let container = document.getElementById('meme-image-container');
const botao1 = document.getElementById('button1');
const botao2 = document.getElementById('button2');
const botao3 = document.getElementById('button3');

function borda1() {
  container.style.border = '3px red dashed';
}

function borda2() {
  container.style.border = '5px blue double';
}

function borda3() {
  container.style.border = '6px green groove';
}


botao1.addEventListener('click', borda1);
botao2.addEventListener('click', borda2);
botao3.addEventListener('click', borda3);

// const meme1 = document.getElementById('meme1');
// const meme2 = document.getElementById('meme2');
// const meme3 = document.getElementById('meme3');
// const meme4 = document.getElementById('meme4');
};
