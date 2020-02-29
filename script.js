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
  // let button = document.getElementsByClassName(event.target.classList[0])[0];
  let customizacao = event.target.style.border;
  let div = document.getElementById('meme-image-container');
  
  div.style.border = customizacao;
}