let textoForm = document.querySelector('#text-input');
let textoCaixa = document.querySelector('.memeText');
function colocaTextoCaixa() {
  textoCaixa.innerText = textoForm.value;
}
textoForm.addEventListener('keyup', colocaTextoCaixa);
let recebeFoto = document.querySelector('#meme-image');
let botaoFoto = document.querySelector('#meme-insert');
function loadImage(event) {
  recebeFoto.src = window.URL.createObjectURL(event.target.files[0]);
}
botaoFoto.addEventListener('change', loadImage);

function trocaBordaA(){
  document.querySelector('.meme-image-container').classList.add('a');
    }
function trocaBordaB(){
  document.querySelector('.meme-image-container').classList.add('b');
    }
function trocaBordaC(){
  document.querySelector('.meme-image-container').classList.add('c');
    }

document.getElementById("meme-1").onclick = function() {
  recebeFoto.src = "./imgs/meme1.jpeg";
    };

document.getElementById("meme-2").onclick = function() {
  recebeFoto.src = "./imgs/meme2.jpeg";
    };

document.getElementById("meme-3").onclick = function() {
  recebeFoto.src = "./imgs/meme3.jpeg";
    };

document.getElementById("meme-4").onclick = function() {
  recebeFoto.src = "./imgs/meme4.jpeg";
    };
