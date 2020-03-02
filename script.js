function printText() {
    const textInput = document.querySelector('.text-input');
    const memeText = document.querySelector('.meme-text');
    memeText.innerHTML = textInput.value

}

function loadImage(event) {
    const memeImage = document.querySelector('.meme-image');
    memeImage.src = URL.createObjectURL(event.target.files[0]);
}

function changeContainerBorder(x) {
    const memeContainer = document.querySelector('.meme-image-container');
    memeContainer.style.border = x;
}
