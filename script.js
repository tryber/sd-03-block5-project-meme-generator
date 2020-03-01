let mostraFoto = function(event) {
    let imagem = document.getElementById('meme-image');
    imagem.src = URL.createObjectURL(event.target.files[0]);
  };

let texto = document.getElementById("text-input");
texto.addEventListener('input', exibir);

function exibir(){
    document.getElementById("meme-text").innerHTML = texto.value;
}

