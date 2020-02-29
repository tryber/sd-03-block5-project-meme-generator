caixaTextoSuperior = document.getElementById("text-input");
caixaTextoInferior = document.getElementById("text-input2");
frameImgTexto = document.getElementById("meme-image-container");
textoDeBaixo = document.getElementById("meme-text2");
textoDeCima = document.getElementById("meme-text");
let caixaCor = document.getElementById("seletorCor");
let imagemMeme = document.getElementById('meme-image');

caixaCor.addEventListener('change', function() {
    textoDeCima.style.color = caixaCor.value;
    textoDeBaixo.style.color = caixaCor.value;
});

function carregaImagem() {
    let botCarrega = document.getElementById("meme-insert");
    let blobImagem = window.URL.createObjectURL(botCarrega.files[0]);
    imagemMeme.src = blobImagem;
    insereTexto();
    }

function insereTexto() {
    textoDeCima.textContent = caixaTextoSuperior.value;
    textoDeBaixo.textContent = caixaTextoInferior.value;
    }

function mudaBorda1() {
    frameImgTexto.style.borderWidth = "3px";
    frameImgTexto.style.borderStyle = "dashed";
    frameImgTexto.style.borderColor = "red";
}
function mudaBorda2() {
    frameImgTexto.style.borderWidth = "5px";
    frameImgTexto.style.borderStyle = "double";
    frameImgTexto.style.borderColor = "blue";
}
function mudaBorda3() {
    frameImgTexto.style.borderWidth = "6px";
    frameImgTexto.style.borderStyle = "groove";
    frameImgTexto.style.borderColor = "green";
}
