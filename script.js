var escrever = document.getElementById("text-input")
var frasememe = document.getElementById("meme-text")

escrever.addEventListener('input', executar)
function executar(){
    frasememe.innerHTML = escrever.value
}

var documentoimg = document.getElementById("meme-insert")
var imagemmeme = document.getElementById("meme-image")



documentoimg.addEventListener("change", event => imagemmeme.src = URL.createObjectURL(event.target.files[0]));