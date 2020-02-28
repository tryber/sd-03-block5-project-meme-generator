let textInput = document.getElementById("text-input");
let imageInput = document.getElementById("input-image");
let memeImage = document.getElementById("meme-image");

function addMeme() {
    memeImage.src = URL.createObjectURL(imageInput.files[0]);
}

imageInput.addEventListener("change", addMeme);