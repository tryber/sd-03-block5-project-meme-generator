let caixaTexto = document.querySelector("#text-input");
caixaTexto.addEventListener("input",function (event) {
    let memeTexto = document.querySelector("#meme-text");
    memeTexto.innerHTML= event.target.value;
})

document.getElementById("meme-insert").onchange = function() {
     
     console.log(this.files[0]);
     let memeImagem = document.getElementById("meme-image");
     memeImagem.setAttribute("src",URL.createObjectURL(this.files[0]));
     }
