let textInput = document.getElementById("text-input");
let imageInput = document.getElementById("input-image");
let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text")

function addMeme() {
    memeImage.src = URL.createObjectURL(imageInput.files[0]);
}

imageInput.addEventListener("change", addMeme);

function addText() {
    memeText.innerHTML = textInput.value
}

textInput.addEventListener("keyup", addText);
