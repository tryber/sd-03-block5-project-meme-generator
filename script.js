// let memeImage = document.querySelector('#meme-image');
// let memeInsert = document.querySelector('#meme-insert');
var loadFile = function(event) {
    var image = document.getElementById('meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);
};