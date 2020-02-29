window.onload = () => {
    let loadFile = function (event) {
        let memeImage = document.getElementById("meme-image");
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
}   

