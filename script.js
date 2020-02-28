window.onload = () => {
  document.getElementById("image-input").addEventListener("change", (event) => {
    document.getElementById('meme-image').src = URL.createObjectURL(event.target.files[0]);
    document.getElementById("meme-image").style.borderColor = "black";
    document.getElementById("meme-image").style.borderWidth = "1px";
    document.getElementById("meme-image").style.borderStyle = "solid";
    document.getElementById("meme-image").style.backgroundColor = "white";
  } )
};
