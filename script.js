let texto = document.getElementById("text-input");
let textOutput = document.getElementById("meme-text");
let image = document.getElementById("meme-image");
// let imgDiv = document.getElementById('meme-image-container');

texto.addEventListener("keyup", escreveText);

function escreveText() {
  textOutput.innerHTML = texto.value;
}

// function loadImage() {
//     image.src = URL.createObjectURL(event.target.files[0]);
// }
