var textImg = document.querySelector('input#text-input');

var textOnImg = document.querySelector('div#textOnImg');
// textImg = tInput
var loadFile =function(event) {
    var output = document.querySelector('div#img');
    var img = URL.createObjectURL(event.target.files[0])
    output.style.backgroundImage = `url(${img})`
    output.style.backgroundSize = "cover"
};

function texting() {
    var textImgInner = document.querySelector('input#text-input').value;
    document.querySelector('div#textOnImg').innerText = textImgInner
}

textImg.addEventListener('keyup',texting);