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

document.getElementById("button1").addEventListener("click",function () {
   let imageContainer = document.getElementById("meme-image-container");
   imageContainer.style.border="3px dashed red";    
})

document.getElementById("button2").addEventListener("click",function () {
    let imageContainer = document.getElementById("meme-image-container");
    imageContainer.style.border="5px dashed blue";
    imageContainer.style.borderStyle="double"    
 })

document.getElementById("button3").addEventListener("click",function () {
    let imageContainer = document.getElementById("meme-image-container");
    imageContainer.style.border="6px groove green";    
 })