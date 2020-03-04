var loadFile = function(event) {
  var output = document.getElementById("meme-image");
  output.src = URL.createObjectURL(event.target.files[0]);
};

let textBox = document.getElementById("text-input");
textBox.addEventListener("input", function() {
  let textImage = document.getElementById("meme-text");
  textImage.innerHTML = textBox.value;
});

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let divFix = document.querySelector(".div-fix");

let meme1 = document.querySelector("#meme1");
let meme2 = document.querySelector("#meme2");
let meme3 = document.querySelector("#meme3");
let meme4 = document.querySelector("#meme4");

button1.addEventListener("click", function() {
  divFix.style.border = "3px dashed red";
});

button2.addEventListener("click", function() {
  divFix.style.border = "5px double blue";
});

button3.addEventListener("click", function() {
  divFix.style.border = "6px groove green";
});

let memeImage = document.querySelector("#meme-image");
meme1.addEventListener("click", function() {
  memeImage.src = "./imgs/meme1.jpg";
});

meme2.addEventListener("click", function() {
  memeImage.src = "./imgs/meme2.jpg";
});

meme3.addEventListener("click", function() {
  memeImage.src = "./imgs/meme3.jpg";
});

meme4.addEventListener("click", function() {
  memeImage.src = "./imgs/meme4.jpg";
});

let allMemes = document.querySelectorAll('.meme').length;
let oneMeme = document.querySelector('.meme');

