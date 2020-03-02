
//Requisito 1 FUNCTION
let texto = document.getElementById("text-input");

function changeText(){
    var alteraTexto = document.getElementById("meme-text");
    alteraTexto.innerHTML = texto.value;
}

let caixaDeTexto = document.getElementById("text-input");

caixaDeTexto.addEventListener("keyup", changeText);

// REQUISITO 2 FUNCTION

let imagem = document.getElementById("meme-insert");
let meme_image;

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

imagem.addEventListener("change", changeImage);

