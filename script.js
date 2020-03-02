function inserirTexto() {
    let texto = document.getElementById("text-input").value;
    document.getElementById("meme-text").innerHTML = texto;
}
function visualizarImagem() {
    let memeImage = document.getElementById("meme-insert");
    let reader = new FileReader();
    reader.onload = function inicioReader(){
        let dataURL = reader.result;
        let memeInsert = document.getElementById("meme-image");
        memeInsert.src = dataURL;
    }
    reader.readAsDataURL(memeImage.files[0]);
}
