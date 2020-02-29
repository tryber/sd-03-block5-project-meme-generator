

window.onload = function(){
    let textInput = document.getElementById('text-input');
    let imagemInput = document.getElementById('meme-insert');
    let memeTxt = document.getElementById("meme-text");
    let btn1 = document.getElementById("button1")
    let btn2 = document.getElementById("button2")
    let btn3 = document.getElementById("button3")
   
    function memeTxtInput(){
        memeTxt.innerText = textInput.value;
        
    }

    textInput.addEventListener('keyup', memeTxtInput)
    
    function upMemeImage(){
      let memeImg = document.getElementById('meme-image');
      memeImg.src = URL.createObjectURL(imagemInput.files[0]);
    
    }
    imagemInput.addEventListener('change', upMemeImage);
    

    function border1 (){
        let container = document.getElementById("meme-image-container")
        container.style.borderWidth = "3px"
        container.style.borderStyle = "dashed"
        container.style.borderColor = "red"
    }

    btn1.addEventListener('click', border1)

    function border2 (){
        let container = document.getElementById("meme-image-container")
        container.style.borderWidth = "5px"
        container.style.borderStyle = "double"
        container.style.borderColor = "blue"
    }

    btn2.addEventListener('click', border2)

    function border3 (){
        let container = document.getElementById("meme-image-container")
        container.style.borderWidth = "6px"
        container.style.borderStyle = "groove"
        container.style.borderColor = "green"
    }

    btn3.addEventListener('click', border3)

}