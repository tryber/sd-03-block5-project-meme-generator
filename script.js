let loadFile = function (event) {
    let image = document.getElementById('meme-image');
    image.src = URL.createObjectURL(event.target.files[0]);
}

let textoDoMeme = document.getElementById("text-input");


function textonaimagem() {
    document.getElementById('meme-text').innerHTML = textoDoMeme.value;
}

textoDoMeme.addEventListener("keyup", textonaimagem);
