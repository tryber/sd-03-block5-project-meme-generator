// primeiro coloco o texto na caixa
/*
window.onload = function(){
  let addImagem = document.getElementById("meme-insert");
  let addText = document.getElementById("text-input");
  let memeText = document.getElementById("meme-text");

  // coloco imagem na caixa

  
    function insereTexto(input) {    
      memeText.textContent = input.target.value;
     };
    addText.addEventListener("beforeinput",insereTexto);

 
}
*/
window.onload = function () {

  document.getElementById("text-input").addEventListener("keyup", function(){

  
    let texto = document.getElementById("insereTexto");
  
    if (this.value != ''){
      texto.innerHTML = this.value;
    }
    else {
      texto.innerHTML = "Esreva o texto";
    }
  
  }) 

  function uploadImage(event){
    
    document.getElementById("meme-image") = addEventListener("change", uploadImage);
    let imagem = document.getElementById("meme-insert");

    imagem.src = URL.createObjectURL(event.target.files[0]);
  };  
    


};
