var loadFile = function(event) {
    var output = document.getElementById('imagem-capturada');
    output.src = URL.createObjectURL(event.target.files[0]);
};

function mostraTexto(){
    let textoDigitado = document.getElementById("text-input").value;
    let inserir=document.createElement("p");
    inserir.innerText=textoDigitado;
    let textoAnterior=document.getElementsByClassName("moldura")[0].getElementsByTagName("p")[0];

    if(textoAnterior){
        document.getElementsByClassName("moldura")[0].removeChild(textoAnterior);
    }

    document.getElementsByClassName("moldura")[0].appendChild(inserir);
}
