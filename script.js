caixaTextoSuperior = document.getElementById("text-input");
caixaTextoInferior = document.getElementById("text-input2");
textoDeBaixo = document.getElementById("meme-text2");
textoDeCima = document.getElementById("meme-text");
caixaCor = document.getElementById("seletorCor");

caixaCor.addEventListener('change', function() {
    textoDeCima.style.color = caixaCor.value;
    textoDeBaixo.style.color = caixaCor.value;
});

function carregaImagem() {
    let botCarrega = document.getElementById("meme-insert");
    let blobImagem = window.URL.createObjectURL(botCarrega.files[0]);
    let imagemCarregada = document.getElementById('meme-image');
    imagemCarregada.src = blobImagem;
    insereTexto();
    }

function insereTexto() {
    textoDeCima.textContent = caixaTextoSuperior.value;
    textoDeBaixo.textContent = caixaTextoInferior.value;
    }
