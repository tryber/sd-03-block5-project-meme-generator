function loadImage(event) {
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
};