var input1 = document.querySelector('#text-input');
var inputImg = document.querySelector('#uploadInput')
var memeText = document.querySelector('#meme-text');
input1.addEventListener('keyup', escreveImagem);

function escreveImagem() {
    var texto = input1.value;
    memeText.innerHTML = texto;

    //console.log('batata')
}

function testando(){
    console.log(test)
}

inputImg.addEventListener('change', readURL);
function readURL() {
    var file = inputImg.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        document.querySelector('#meme-image').style.backgroundImage = "url(" + reader.result + ")";

    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        console.log('nao deu')
    }
}

var test = document.querySelector('#text-input').value;
console.log(test);