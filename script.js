let memeText = document.getElementById("meme-text");
let memeImage = document.getElementById("meme-image");
let lugarMeme = document.getElementById("lugarMeme");

function addMeme() {
    lugarMeme.src = URL.createObjectURL(memeImage.files[0]);
}

memeImage.addEventListener("change", addMeme);