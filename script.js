let memeText = document.getElementById("meme-text");
let memeImage = document.getElementById("meme-image");
let lugarMeme = document.getElementById("lugarMeme");

function addMeme() {
    lugarMeme.src = URL.createObjectURL(memeImage.files[0]);
    lugarMeme.style.width = 400 + "px";
    lugarMeme.style.height = 400 + "px";
}

memeImage.addEventListener("change", addMeme);