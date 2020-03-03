let inputText = document.getElementById("text-input");
let inputImage = document.querySelector("#meme-insert");
let text = document.getElementById("meme-text");
let img = document.getElementById("meme-image")
function loadFile() {
  img.src = URL.createObjectURL(inputImage.files[0]);
}
inputImage.addEventListener("change", loadFile);

function TextoDinamico() {
  paragraph.innerHTML = inputText.value
}
inputText.addEventListener("keyup", TextoDinamico);

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let containerImage = document.getElementById("meme-image-container");
function TrocaBorda1() {
  containerImage.style.border = "3px dashed red";
}
button1.addEventListener("click", TrocaBorda1);

function TrocaBorda2() {
  containerImage.style.border = "5px double blue";
}
button2.addEventListener("click", TrocaBorda2);

function TrocaBorda3() {
  containerImage.style.border = "6px groove green";
}
button3.addEventListener("click", TrocaBorda3)

let meme1 = document.getElementById("meme-1");
let meme2 = document.getElementById("meme-2");
let meme3 = document.getElementById("meme-3");
let meme4 = document.getElementById("meme-4");
function trocaImagem1() {
  img.src = "imgs/meme1.jpeg";
}
meme1.addEventListener("click", trocaImagem1);

function trocaImagem2() {
  img.src = "imgs/meme2.jpeg";
}
meme2.addEventListener("click", trocaImagem2);

function trocaImagem3() {
  img.src = "imgs/meme3.jpeg";
}
meme3.addEventListener("click", trocaImagem3);

function trocaImagem4() {
  img.src = "imgs/meme4.jpeg";
}
meme4.addEventListener("click", trocaImagem4);
