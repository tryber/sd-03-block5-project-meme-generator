let inputEscrita = document.getElementById('text-input');
let divMeme = document.getElementById('meme-image-contaniner');
let textoMeme = document.getElementsByClassName('meme-text')[0];

let loadFile = function (event) {
    let image = document.getElementById('meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);

};

inputEscrita.addEventListener('keyup', function () {
    textoMeme.innerHTML = this.value;
});
