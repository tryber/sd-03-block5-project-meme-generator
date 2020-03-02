window.onload = function(){
    let textInput = document.getElementById('text-input');
    let memeInsert = document.getElementById('meme-insert');
    let memeText = document.getElementById('meme-text');
    let memeImage = document.getElementById('meme-image');

    function memeTextInput(){
        memeText.innerText = textInput.value;
    }
    textInput.addEventListener('keyup', memeTextInput)

    function imageInsert(){
        memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    }
    memeInsert.addEventListener('change', imageInsert);
}
