window.onload = function() {

    let inputText = document.getElementById('text-input')
    let inputImage = document.getElementById('meme-insert');
    let p = document.getElementById('meme-text');

    function uploadImage(event) {
        let image = document.getElementById('meme-image');
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    inputImage.addEventListener("change", uploadImage);

    function showText() {
        p.innerHTML = inputText.value;
    }
    inputText.addEventListener("keydown", showText);
};