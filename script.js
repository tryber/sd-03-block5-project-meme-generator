
let entradaTexto = document.getElementById("text-input");
let entradaImagem = document.getElementById("meme-insert");
let textoMeme = document.getElementById("meme-text");
let botao1 = document.getElementById('button1');
let botao2 = document.getElementById('button2');
let botao3 = document.getElementById('button3');
let meme1 = document.getElementById('meme-1');
let meme2 = document.getElementById('meme-2');
let meme3 = document.getElementById('meme-3');
let meme4 = document.getElementById('meme-4');
let memeImg = document.getElementById("meme-image");


let meme = function(event){
  memeImg.src = URL.createObjectURL(event.target.files[0]);
}

entradaTexto.addEventListener("keyup",function(){
  textoMeme.innerHTML = this.value; 
})

botao1.addEventListener('click',function(){
  let container = document.getElementById('meme-image-container');
  container.style.borderWidth = '3px';
  container.style.borderColor = 'red';
  container.style.borderStyle = 'dashed';
})

botao2.addEventListener('click',function(){
  let container = document.getElementById('meme-image-container');
  container.style.borderWidth = '5px';
  container.style.borderColor = 'blue';
  container.style.borderStyle = 'double';
})

botao3.addEventListener('click',function(){
  let container = document.getElementById('meme-image-container');
  container.style.borderWidth = '6px';
  container.style.borderColor = 'green';
  container.style.borderStyle = 'groove';
})

meme1.addEventListener('click',function(){
  memeImg.src = meme1.src;
})

meme2.addEventListener('click',function(){
  memeImg.src = meme2.src;
})

meme3.addEventListener('click',function(){
  memeImg.src = meme3.src;
})

meme4.addEventListener('click',function(){
  memeImg.src = meme4.src;
})

