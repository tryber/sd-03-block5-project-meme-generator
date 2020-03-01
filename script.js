let texto = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let selectedPic = document.getElementById("meme-image");
let imageContainer = document.getElementById("image-container");

texto.addEventListener("keyup", writeText);


function writeText() {
memeText.innerHTML = texto.value;
}


function setImage() {
selectedPic.src = URL.createObjectURL(event.target.files[0]);
}

