let loadFile = function(event) {
    let memeImage = document.getElementById("imagem");
    memeImage.src = URL.createObjectURL(event.target.files[0]);
    // memeImage.style.height = 300 + "px";
    // memeImage.style.width = 300 + "px";
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
