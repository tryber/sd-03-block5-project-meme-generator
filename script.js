function inputImagem(){
  let imagem = document.getElementById("aquivo_imagem").files[0];
  let reader = new FileReader();
  let img = document.getElementById("meme-image");
  console.log(reader);
  
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
  let texto = document.getElementById('text-input').value;
  let lugar = document.getElementById('meme-text');
  lugar.innerText = texto;
}
