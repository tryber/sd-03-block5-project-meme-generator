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
botao1.addEventListener('click', function borda1(){
  borda.style.borderColor = "red";
  borda.style.borderStyle = "dashed";
  borda.style.borderWidth = "3px";
});

let botao2 = document.getElementById("button2");
botao2.addEventListener('click', function borda2(){
  borda.style.borderColor = "blue";
  borda.style.borderStyle = "double";
  borda.style.borderWidth = "5px";
});

let botao3 = document.getElementById("button3");
botao3.addEventListener('click', function borda3(){
  borda.style.borderColor = "green";
  borda.style.borderStyle = "groove";
  borda.style.borderWidth = "6px";
});

borda = document.getElementById("meme-image-container");
