function preview(event) {
    var reader = new FileReader();
    var campo = document.querySelector('.imagem-selecionada');

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

function overlaidBot() {
    let text = document.querySelector('#texto-inferior').value;
    document.querySelector('#bottom-phrase').innerHTML = text;
}