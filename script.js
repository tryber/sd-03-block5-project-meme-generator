let textBox = document.getElementById('meme-insert');

let textOutput = document.getElementById('meme-text');

let image = document.getElementById('meme-image');

textBox.addEventListener('keyup', changeText);

function changeText () {
textOutput.innerHTML = textBox.value;
}

function loadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);
}