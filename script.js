function escreverNaImagem() {
    let input = document.getElementById("text-input");
    let paragrafo = document.getElementById("meme-text");
    input.addEventListener("input",function(s) {
    
    paragrafo.innerHTML = input.value;
   
    
    });

  }
 escreverNaImagem();

  