let memetxt = document.getElementById('text-input');
let inputtext = document.getElementById('texto');
let memeImage = document.getElementById('meme-insert');

let meme = function(event) {
    let image = document.getElementById('meme-image')
    image.src = URL.createObjectURL(event.target.files[0]);
}

memetxt.addEventListener('keyup', function() {
    inputtext.innerHTML = this.value;

});