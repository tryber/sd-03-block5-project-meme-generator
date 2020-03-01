window.onload= function(){
    let Text=document.getElementById("text-input")
    let TextImg= document.getElementById("meme-text")
    function TextoDinamico(){
        TextImg.innerText=Text.value
    }
    Text.addEventListener("keydown", TextoDinamico)

    function loadFile() {
        let image = document.getElementsByClassName("meme-image")[0];
        image.src = URL.createObjectURL(event.target.files[0]);
        image.innerHTML=TextImg.target.value
    };
    let im = document.getElementById('meme-insert');
    im.addEventListener("change", loadFile)
}