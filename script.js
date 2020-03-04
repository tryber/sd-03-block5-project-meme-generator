
let entradaTexto = document.getElementById("text-input");
let entradaImagem = document.getElementById("meme-insert");
let textoMeme = document.getElementById("meme-text");

let meme = function(event){
  let memeImg = document.getElementById("meme-image");
  memeImg.src = URL.createObjectURL(event.target.files[0]);
}

entradaTexto.addEventListener("keyup",function(){
  textoMeme.innerHTML = this.value; 
})



