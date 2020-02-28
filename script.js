let memetxt = document.getElementById('text-input');
let inputtext = document.getElementById('meme-text');
let memeImage = document.getElementById('meme-image');

let meme = function(event) {
    let image = document.getElementById('imagem')
    image.src = URL.createObjectURL(event.target.files[0]);
}

memetxt.addEventListener('keyup', function() {
    inputtext.innerHTML = this.value;
});