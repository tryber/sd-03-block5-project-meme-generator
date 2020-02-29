let texto = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text");
let image = document.getElementById("meme-image");
let imgDiv = document.getElementById("meme-image-container"); //mudar nomde desse let?!
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

texto.addEventListener("keyup", escreveText);
button1.addEventListener("click", change1);
button2.addEventListener("click", change2);
button3.addEventListener("click", change3);

function escreveText() {
  textOutput.innerHTML = texto.value;
}

function change1() {
  imgDiv.style.border = "3px dashed red";
}

function change2() {
  imgDiv.style.border = "5px double blue";
}

function change3() {
  imgDiv.style.border = "6px groove green";
}

function loadImage() {
  image.src = URL.createObjectURL(event.target.files[0]);
}

// adicionar funções pros clicks dos botões
