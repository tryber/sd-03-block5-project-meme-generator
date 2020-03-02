function escreverNaImagem() {
    let input = document.getElementById("text-input");
    let paragrafo = document.getElementById("meme-text");
    input.addEventListener("input",function(s) {
    
    paragrafo.innerHTML = input.value;
   
    
    });

  }
 escreverNaImagem();


 function imagem(){
     let arquivo = document.getElementById("meme-insert");
     let bottom = document.getElementById("inserir");
     let img = document.getElementById("meme-image");
     bottom.addEventListener("click",function(s){
        console.log(arquivo.value);
       img.src = arquivo.value;

     });
 }
 imagem();

  