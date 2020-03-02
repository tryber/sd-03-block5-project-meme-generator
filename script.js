function escreverNaImagem() {
    let input = document.getElementById("text-input");
    let paragrafo = document.getElementById("meme-text");
    input.addEventListener("input",function(s) {
    
    paragrafo.innerHTML = input.value;
   
    
    });

  }
 escreverNaImagem();




  
  let input = document.getElementById("meme-insert");

input.addEventListener('change',function () {
    let inputImagem = input.files[0];
    console.log(inputImg);
    let ler = new FileReader();
    let image = document.getElementById("meme-image");
    if (inputImagem){
      ler.readAsDataURL(inputImg)

    }
    ler.onloadend = function ()
    {
      image.src = ler.result;
    }
  })



  function botao1() {
    let imagem = document.getElementById("meme-image-container");
    imagem.style.borderStyle = "dashed";
    imagem.style.borderColor = "red";
    imagem.style.borderWidth = "3px";


  }

  function botao2() {
    let imagem = document.getElementById("meme-image-container");
    imagem.style.borderStyle = "double";
    imagem.style.borderColor = "blue";
    imagem.style.borderWidth = "5px";


  }  function botao3() {
    let imagem = document.getElementById("meme-image-container");
    imagem.style.borderStyle = "groove";
    imagem.style.borderColor = "green";
    imagem.style.borderWidth = "6px";


  }

