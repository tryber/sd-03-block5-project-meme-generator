const caixaTexto = document.querySelector('#text-input');
const caixa = document.querySelector('.caixa');
function trocaTexto () {
  caixa.innerHTML = caixaTexto.value;
}
caixaTexto.addEventListener("keyup", trocaTexto);

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}


    let corA = document.getElementsByClassName("a").border;
    let corB = document.getElementsByClassName("b").border;
    let corC = document.getElementsByClassName("c").border;
    let borda = document.getElementsByClassName("caixa").border;
    function trocaBordaA(){
        borda = corA;
    }
    function trocaBordaB(){
        borda = corB;
    }
    function trocaBordaC(){
        borda = corC;
    }

    let meme1 = document.querySelector('#meme1');
    let meme2 = document.querySelector('#meme2');
    let meme3 = document.querySelector('#meme3');
    let meme4 = document.querySelector('#meme4');

    meme1.addEventListener("click", function(){})
