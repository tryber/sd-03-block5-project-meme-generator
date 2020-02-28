caixaTextoSuperior = document.getElementById("text-input");
caixaTextoInferior = document.getElementById("text-input2");
textoDeBaixo = document.getElementById("meme-text2");
textoDeCima = document.getElementById("meme-text");

function carregaImagem() {
    let botCarrega = document.getElementById("abreArquivo");
    let blobImagem = window.URL.createObjectURL(botCarrega.files[0]);
    let imagemCarregada = document.getElementById('meme-image');
    imagemCarregada.src = blobImagem;
    imagemCarregada.style.width = blobImagem.width;
    insereTexto();
    }
        
function insereTexto() {
    textoDeCima.textContent = caixaTextoSuperior.value;
    textoDeBaixo.textContent = caixaTextoInferior.value;
    }