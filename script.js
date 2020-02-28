let textInput = document.getElementById("text-input");
let memeInsert = document.getElementById("meme-insert");

let memeImage = document.getElementById("meme-image");
let memeText = document.getElementById("meme-text");

function addMeme() {
    memeImage.src = URL.createObjectURL(memeInsert.files[0]);
}

memeInsert.addEventListener("change", addMeme);

function addText() {
    memeText.innerHTML = textInput.value;
}

textInput.addEventListener("keyup", addText);
