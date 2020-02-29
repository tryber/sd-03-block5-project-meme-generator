caixaTextoSuperior = document.getElementById("text-input");
caixaTextoInferior = document.getElementById("text-input2");
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
    imagemMeme.style.borderWidth = "3px";
    imagemMeme.style.borderStyle = "dashed";
    imagemMeme.style.borderColor = "red";
}
function mudaBorda2() {
    imagemMeme.style.borderWidth = "5px";
    imagemMeme.style.borderStyle = "double";
    imagemMeme.style.borderColor = "blue";
}
function mudaBorda3() {
    imagemMeme.style.borderWidth = "6px";
    imagemMeme.style.borderStyle = "groove";
    imagemMeme.style.borderColor = "green";
}