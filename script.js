function inputImagem(){
  let imagem = document.getElementById("meme-insert").files[0];
  let reader = new FileReader();
  let img = document.getElementById("meme-image");
  reader.onloadend = function() {
    img.src = reader.result;
  }

  if (imagem) {
    reader.readAsDataURL(imagem);
  } else {
    img.src = "";
  }
}

function textoImagem() {
  let texto = document.getElementById('text-input');
  let lugar = document.getElementById('meme-text');
  lugar.innerText = texto.value;
}

function mudaborda(event) {
  let customizacao = window.getComputedStyle(event.target).border;
  let div = document.getElementById('meme-image-container');
  div.style.border = customizacao;
}

function memePronto(event) {
  let img = event.target;
  let meme_imagem = document.getElementById('meme-image')
  meme_imagem.src = img.src;
}
