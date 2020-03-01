var textImg = document.querySelector('input#text-input');

var loadFile =function(event) {
    var output = document.querySelector('div#img');
    var img = URL.createObjectURL(event.target.files[0])
    output.style.backgroundImage = `url(${img})`
    output.style.backgroundSize = "cover"
};

function typing() {
    var textImgInner = document.querySelector('input#text-input').value;
    document.querySelector('#textOnImg').innerText = textImgInner
}

textImg.addEventListener('keyup',typing);