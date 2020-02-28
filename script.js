let textBox = document.getElementById('text-input');

let textOutput = document.getElementById('meme-text');

let image = document.getElementById('meme-image');

textBox.addEventListener('keyup', changeText);

function changeText () {
    textBox.value.toUpperCase();
    textOutput.innerHTML = textBox.value;
}

function loadImage() {
    image.src = URL.createObjectURL(event.target.files[0]);
}