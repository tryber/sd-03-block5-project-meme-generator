//Escrever o texto do meme sobre a imagem

let textBox = document.getElementById('text-input');
let textMeme = document.getElementById('meme-text');
textBox.addEventListener('keyup', writeText);

function writeText () {
    textMeme.innerHTML = textBox.value;
}


//incluir imagem

let image = document.getElementById('meme-image');

function uploadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);
}
