function inputImagem(){
  let fReader = new FileReader();
  let imagem = fReader.readAsDataURL(document.getElementById("aquivo_imagem").files[0]);
  let img = document.getElementById("meme-image");
  img.src = imagem;
}

function textoImagem() {
  let texto = document.getElementById('text-input').value;
  let lugar = document.getElementById('meme-text');
  lugar.innerText = texto;
}
