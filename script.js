var loadFile = function (event) {
    var output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
};

let textBox = document.getElementById('text-input');
textBox.addEventListener('input', function() {
    let textImage = document.getElementById('meme-text');
    textImage.innerHTML = textBox.value
})
