
let textIn = document.getElementById("text-input");

let textOut = document.getElementById("meme-text");

let image = document.getElementById("meme-image");

textIn.addEventListener('keyup', changetxt);

function changetxt() {
    textIn.value.toUpperCase();
    textOut.innerHTML = textIn.value;
}

function loadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);
}
 
