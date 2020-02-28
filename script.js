var input1 = document.querySelector('#text-input');
var inputImg = document.querySelector('#uploadInput')
var memeText = document.querySelector('#meme-text');
input1.addEventListener('keyup', escreveImagem);

function escreveImagem() {
    var texto = input1.value;
    memeText.innerHTML = texto;
s
}

inputImg.addEventListener('change', readURL);
function readURL() {
    var file = inputImg.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function () {
        document.querySelector('#meme-image').style.backgroundImage = "url(" + reader.result + ")";
    }
}