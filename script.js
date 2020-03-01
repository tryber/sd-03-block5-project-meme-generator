
let texto = document.getElementById("text-input");
let memeText = document.getElementById("meme-text");
texto.addEventListener("keyup", writeText);
let selectedPic = document.getElementById("meme-image");
let imageContainer = document.getElementById("image-container");

function setImage() {
selectedPic.src = URL.createObjectURL(event.target.files[0]);
}
function writeText() {
    memeText.innerHTML = texto.value;
    }
    
