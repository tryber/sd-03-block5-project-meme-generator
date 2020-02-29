var loadFile = function(event) {
    var output = document.getElementById("meme-image");
    output.src = URL.createObjectURL(event.target.files[0]);
};

function mostraTexto(){
    let textoDigitado = document.getElementById("text-input").value;
    let inserir=document.createElement("p");
    inserir.innerText=textoDigitado;

    let textoAnterior=document.getElementsByClassName("editImage")[0].getElementsByTagName("p")[0];

    if(textoAnterior){
        document.getElementsByClassName("editImage")[0].removeChild(textoAnterior);
    }

    document.getElementsByClassName("editImage")[0].appendChild(inserir);
}
