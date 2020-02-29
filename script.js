window.onload = function(){

let imagem = document.getElementById('meme-insert');

function insertimg(){
  let aplicaImg = document.getElementById('meme-image');
  aplicaImg.src = URL.createObjectURL(imagem.files[0]);  
}

imagem.addEventListener('change', insertimg);
 
const textoCima = document.getElementById('texto1');
const textoBaixo = document.getElementById('texto2');

const tamFonte = document.getElementById('tamanhoFonte');
tamFonte.addEventListener('click', function(){
  textoCima.style.fontSize = tamFonte.value + 'pt';
  textoBaixo.style.fontSize = tamFonte.value + 'pt';
})
}