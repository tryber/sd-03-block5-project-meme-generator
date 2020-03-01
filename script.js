let caixaTexto = document.querySelector("#text-input");
caixaTexto.addEventListener("input",function (event) {
    let memeTexto = document.querySelector("#meme-text");
    memeTexto.innerHTML= event.target.value;
})
