let texto = document.getElementById("text-input");

function changeText(){
    var alteraTexto = document.getElementById("meme-text");
    alteraTexto.innerHTML = texto.value;
}

let caixaDeTexto = document.getElementById("text-input");

caixaDeTexto.addEventListener("keyup", changeText);