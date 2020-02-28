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