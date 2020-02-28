const inputFundo = document.querySelector("#meme-image");
function colocaFoto() {
    document.getElementsByClassName("caixa").background = inputFundo;
                      }
const caixaTexto = document.querySelector('#text-input');
const caixa = document.querySelector('.caixa');
function trocaTexto () {
  caixa.innerHTML = caixaTexto.value;
}
caixaTexto.addEventListener("keyup", trocaTexto);
