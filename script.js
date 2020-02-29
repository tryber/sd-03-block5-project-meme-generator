let loadFile = function(event) {
    let output = document.getElementById('meme-image');
    output.src = URL.createObjectURL(event.target.files[0]);
};

function mostraTexto(){
    let textoDoUsuario= document.getElementById("text-input").value;
    let inserir=document.createElement("p");
    inserir.innerText=textoDoUsuario;
    let texto=document.getElementsByClassName("posicaoDaImagem")[0].getElementsByTagName("p")[0];

    if(texto){
        document.getElementsByClassName("posicaoDaImagem")[0].removeChild(texto);
    }

    document.getElementsByClassName("posicaoDaImagem")[0].appendChild(inserir);
}