let texto = document.getElementById('text-input');
let imagem = document.getElementById('meme-insert');
let meme_image;
let caixaDeTexto = document.getElementById('text-input');
function changeText() {
    var alteraTexto = document.getElementById('meme-text');
    alteraTexto.innerHTML = texto.value;
}
function changeImage() {
    var preview = document.querySelector('img');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
          reader.readAsDataURL(file);
    } else {
          preview.src = '';
    }
}
caixaDeTexto.addEventListener('keyup', changeText);
imagem.addEventListener('change', changeImage);
