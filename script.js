let imageContainer = document.getElementById("image-container");
let memeText = document.getElementById("meme-text");
let selectedPic = document.getElementById("meme-image");
let texto = document.getElementById("text-input");

function setImage() {
  selectedPic.src = URL.createObjectURL(event.target.files[0]);
}

function writeText() {
  memeText.innerHTML = texto.value;
}

texto.addEventListener("keyup", writeText);

let botao1 = document.getElementById("button1");
botao1.addEventListener("click", function borda1() {
  borda.style.borderColor = "red";
  borda.style.borderStyle = "dashed";
  borda.style.borderWidth = "3px";
});

let botao2 = document.getElementById("button2");
botao2.addEventListener("click", function borda2() {
  borda.style.borderColor = "blue";
  borda.style.borderStyle = "double";
  borda.style.borderWidth = "5px";
});

let botao3 = document.getElementById("button3");
botao3.addEventListener("click", function borda3() {
  borda.style.borderColor = "green";
  borda.style.borderStyle = "groove";
  borda.style.borderWidth = "6px";
});

borda = document.getElementById("meme-image-container");


let enviarMeme1 = document.getElementById("meme-image");

let primeiroMeme = document.getElementById("meme1");
primeiroMeme.addEventListener('click', function meme1() {
  let meme1 = document.getElementById("meme1");
  enviarMeme1.src = meme1.src;
});

let segundoMeme = document.getElementById("meme2");
segundoMeme.addEventListener('click', function meme2() {
  let meme2 = document.getElementById("meme2");
  enviarMeme1.src = meme2.src;
});

let terceiroMeme = document.getElementById("meme3");
terceiroMeme.addEventListener('click', function meme2() {
  let meme3 = document.getElementById("meme3");
  enviarMeme1.src = meme3.src;
});

let quartoMeme = document.getElementById("meme4");
quartoMeme.addEventListener('click', function meme4() {
  let meme4 = document.getElementById("meme4");
  enviarMeme1.src = meme4.src;
});

let quintoMeme = document.getElementById("meme5");
quintoMeme.addEventListener('click', function meme5() {
  let meme5 = document.getElementById("meme5");
  enviarMeme1.src = meme5.src;
});

let sextoMeme = document.getElementById("meme6");
sextoMeme.addEventListener('click', function meme6() {
  let meme6 = document.getElementById("meme6");
  enviarMeme1.src = meme6.src;
});
