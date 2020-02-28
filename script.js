
let caixaTexto = document.getElementById("text-input");
let texto = document.getElementById("text-exemple");

function changeText(){
    texto.innerHTML = caixaTexto.value;
}
document.addEventListener("keyup", changeText);

let espaco = document.getElementById("white-place");
let caixaImagem = document.getElementById("meme-image");
let imagem = document.getElementById("image-example");
    console.log(caixaImagem, imagem);

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
            preview.src = "";
    }
}
document.addEventListener("change", changeImage);
