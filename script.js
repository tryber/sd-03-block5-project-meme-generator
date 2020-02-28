let textinput,imageinput,gerador,canvas,aux;

function geradormeme(img){
    canvas.width = img.width;
    canvas.height = img.height;
    aux.clearRect(0, 0, canvas.width, canvas.height);
    aux.drawImage(img, 0, 0);
}
function init(){
    textinput = document.getElementById('text-input');
    imageinput = document.getElementById('select-img');
    gerador = document.getElementById('gerador-meme');
    canvas = document.getElementById('meme-image');

    aux = canvas.getContext('2d');
    canvas.height = 0;
    canvas.width = canvas.height;

    gerador.addEventListener('click', function(){
        let reader = new FileReader();
        reader.onload = function() {
            let img = new Image;
            img.src = reader.result;
            geradormeme(img);
        };
        reader.readAsDataURL(imageinput.files[0]);
    });
}

init();