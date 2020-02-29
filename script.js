

window.onload = function(){
    let textInput = document.getElementById('text-input');
    let imagemInput = document.getElementById('meme-insert');
    let memeTxt = document.getElementById("meme-text");
   
    function memeTxtInput(){
        memeTxt.innerText = textInput.value;
        
    }

    textInput.addEventListener('keyup', memeTxtInput)
    
    function upMemeImage(){
      let memeImg = document.getElementById('meme-image');
      memeImg.src = URL.createObjectURL(imagemInput.files[0]);
    
    }
    imagemInput.addEventListener('change', upMemeImage);
    }

