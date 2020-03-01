const inputFile = document.getElementById("inputFile");
const container = document.getElementById("meme-image-container");
const image = container.querySelector(".meme-insert");

function mostraTexto() {
    let texto = document.getElementById("text-input").value;
    document.getElementById("resultado").innerHTML =  texto;
}


inputFile.addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
       
        image.style.display = "block";

        reader.addEventListener("load", function() {
            image.setAttribute("src", this.result);        
        });

        reader.readAsDataURL(file);
    } else {
        image.style.display = "null";
        image.setAttribute("src", "");
    }
});