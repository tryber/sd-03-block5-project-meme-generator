window.onload = function(){
    const textInput = document.getElementById('text-input');
    const memeInsert = document.getElementById('meme-insert');
    const memeText = document.getElementById('meme-text');
    const memeImage = document.getElementById('meme-image');

    textInput.addEventListener('keyup', function(){
        memeText.innerText = this.value;
    });

    memeInsert.addEventListener('change', function(){
        memeImage.src = URL.createObjectURL(memeInsert.files[0]);
    });
}
