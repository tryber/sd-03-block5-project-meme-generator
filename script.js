function preview(event) {
    var reader = new FileReader();
    var campo = document.querySelector('#meme-image');

    reader.onload = function() {
        if (reader.readyState == 2) {
            campo.src = reader.result;
        }

    }
    reader.readAsDataURL(event.target.files[0]);

}
let textTop = document.querySelector('#texto-cima');
console.log(textTop);

function overlaidTop() {
    let text = document.querySelector('#text-input').value;
    document.querySelector('#meme-text').innerHTML = text;
}

function changeborder1() {
    document.querySelector('#meme-image-container').style.border = "3px dashed red";
}

function changeborder2() {
    document.querySelector('#meme-image-container').style.border = "5px double blue";
}

function changeborder3() {
    document.querySelector('#meme-image-container').style.border = "6px groove green";
}

function changeborder4() {
    document.querySelector('#meme-image-container').style.border = "none";
}

function toContainer() {
    var campo = document.querySelector('#meme-image');
    //campo.src = "imgs/meme1.jpeg";
    campo.src = document.querySelector('#meme1').src;

}

function toContainer1() {
    var campo = document.querySelector('#meme-image');
    //campo.src = "imgs/meme1.jpeg";
    campo.src = document.querySelector('#meme2').src;


}

function toContainer2() {
    var campo = document.querySelector('#meme-image');
    //campo.src = "imgs/meme1.jpeg";
    campo.src = document.querySelector('#meme3').src;


}

function toContainer3() {
    var campo = document.querySelector('#meme-image');
    //campo.src = "imgs/meme1.jpeg";
    campo.src = document.querySelector('#meme4').src;


}