var textImg = document.querySelector('input#text-input');

// var loadFile =function(event) {
//     var output = document.querySelector('div#meme-image');
//     var img = URL.createObjectURL(event.target.files[0])
//     output.style.backgroundImage = `url(${img})`
//     output.style.backgroundSize = "cover"
// };

var loadFile = function(imagemCarregada) {
    var output = document.querySelector('#meme-image');
    output.src = URL.createObjectURL(imagemCarregada.target.files[0]);
}

function typing() {
    var textImgInner = document.querySelector('input#text-input').value;
    document.querySelector('#textOnImg').innerText = textImgInner
}

textImg.addEventListener('keyup',typing);