function inserirTexto() {
    let texto = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = texto;
}

function visualizarImagem() {
    let memeImage = document.getElementById("meme-insert");
    let reader = new FileReader();
    reader.onload = function inicioReader(){
        let dataURL = reader.result;
        let memeInsert = document.getElementById("meme-image");
        memeInsert.src = dataURL;
    }
    reader.readAsDataURL(memeImage.files[0]);
}

function bordaDashed() {
  document.getElementById('meme-image-container').style.border = '3px dashed red'
}

function bordaDouble() {
  document.getElementById('meme-image-container').style.border = '5px double blue'
}

function bordaGroove() {
  document.getElementById('meme-image-container').style.border = '6px groove green'
}

function memeUm() {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = 'imgs/meme1.jpeg';
}

function memeDois() {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = 'imgs/meme2.jpeg';
}

function memeTres() {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = 'imgs/meme3.jpeg';
}

function memeQuatro() {
  let memeImage = document.getElementById("meme-image");
  memeImage.src = 'imgs/meme4.jpeg';
}
