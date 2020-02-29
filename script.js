caixaTextoSuperior = document.getElementById("text-input");
caixaTextoInferior = document.getElementById("text-input2");
textoDeBaixo = document.getElementById("meme-text2");
textoDeCima = document.getElementById("meme-text");
let caixaCor = document.getElementById("seletorCor");
let imagemMeme = document.getElementById('meme-image');
let frameImagem = document.getElementsByClassName("containerImagemTexto")[0];

caixaCor.addEventListener('change', function() {
    textoDeCima.style.color = caixaCor.value;
    textoDeBaixo.style.color = caixaCor.value;
});

function carregaImagem() {
    let botCarrega = document.getElementById("meme-insert");
    let blobImagem = window.URL.createObjectURL(botCarrega.files[0]);
    imagemMeme.src = blobImagem;
    insereTexto();
    frameImagem.clientHeight = imagemMeme.height;
    }

function insereTexto() {
    textoDeCima.textContent = caixaTextoSuperior.value;
    textoDeBaixo.textContent = caixaTextoInferior.value;
    }
