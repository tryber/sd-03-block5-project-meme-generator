let texto = document.getElementById('text-input');
let imagem = document.getElementById('meme-insert');
let meme_image;
let caixaDeTexto = document.getElementById('text-input');
let bottons = document.querySelectorAll('button');
let espacoDoMeme = document.getElementById('meme-image-container');
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
for (let i = 0; i < 3; i += 1) {
    bottons[i].addEventListener('click', function() {
        if (i == 0) {
            espacoDoMeme.style.border = '3px dashed red';
        }
        else if (i == 1) {
            espacoDoMeme.style.border = '5px double blue';
        }
        else {
            espacoDoMeme.style.border = '6px groove green';
        }
    });
}
caixaDeTexto.addEventListener('keyup', changeText);
imagem.addEventListener('change', changeImage);
