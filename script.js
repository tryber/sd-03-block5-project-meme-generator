openFile = function(event) {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = function(){
        var dataURL = reader.result;
        var mostrarImg = document.getElementById('meme-image');
        mostrarImg.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
};

function mostrarTxt() {
    let pegaTexto = document.getElementById('text-input').value;
    let upTexto = document.getElementById('meme-text');
    upTexto.innerHTML = pegaTexto;
};

function aumentarTxt() {
    let pegaTxt = document.querySelector('.aumentar-txt');
    let upTxt = document.querySelector('.aumtxt');
    upTxt.addEventListener('click', function(){
        pegaTxt.style.fontSize = "40px";
    });
}