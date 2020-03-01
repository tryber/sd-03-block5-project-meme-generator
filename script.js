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

  let meme1 = document.querySelector("#meme1");
  console.log(meme1.getAttribute("src"));
meme1.addEventListener("click", function() {
    let memeImagem = document.getElementById("meme-image");
    memeImagem.setAttribute("src",meme1.getAttribute("src"));
})

let meme2 = document.querySelector("#meme2");
  console.log(meme2.getAttribute("src"));
meme2.addEventListener("click", function() {
    let memeImagem = document.getElementById("meme-image");
    memeImagem.setAttribute("src",meme2.getAttribute("src"));
})

let meme3 = document.querySelector("#meme3");
  console.log(meme3.getAttribute("src"));
meme3.addEventListener("click", function() {
    let memeImagem = document.getElementById("meme-image");
    memeImagem.setAttribute("src",meme3.getAttribute("src"));
})

let meme4 = document.querySelector("#meme4");
  console.log(meme4.getAttribute("src"));
meme4.addEventListener("click", function() {
    let memeImagem = document.getElementById("meme-image");
    memeImagem.setAttribute("src",meme4.getAttribute("src"));
})