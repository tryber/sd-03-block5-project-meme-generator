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
