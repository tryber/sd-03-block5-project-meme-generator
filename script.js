let texto = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
let pic = document.getElementById("meme-image");
let imageContainer = document.getElementById("image-container");

texto.addEventListener("keyup", escreveText);


function escreveText() {
memeText.innerHTML = texto.value;
}


function setImage() {
pic.src = URL.createObjectURL(event.target.files[0]);
}

