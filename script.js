window.onload = () => {
    let memeImage = document.getElementById("meme-image");
    let loadFile = function (event) {
        memeImage.src = URL.createObjectURL(event.target.files[0]);       
    };

    let memeInsert = document.getElementById("meme-insert");
    memeInsert.addEventListener('change', loadFile);
    
    let txtInput = document.getElementById('text-input')
    let memeTxt = document.getElementById('meme-text')
    
    function escrever() {
        memeTxt.innerText = txtInput.value
    }
    
    txtInput.addEventListener('keyup', escrever)

    /*const button1 = document.getElementById("button1");
    const button2 = document.getElementById("button2");
    const button3 = document.getElementById("button3");
    let container = document.getElementById("meme-image-container");
    
    function trocarBorda1 (){
        container.style.border = "3px dashed red"
    }
    button1.addEventListener('click', trocarBorda1);*/

    const meme1 = document.getElementById("meme-1")
    const meme2 = document.getElementById("meme-2")
    const meme3 = document.getElementById("meme-3")
    const meme4 = document.getElementById("meme-4")
    
    meme1.addEventListener('click', function(){
        memeImage.src = meme1.src 
    })

}   


