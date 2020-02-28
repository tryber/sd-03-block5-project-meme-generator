window.onload = () => {
  const changeImg = () => {
    console.log(document.getElementById("image-input").value);
    document.getElementById("meme-image").src = document.getElementById("image-input").value
    document.getElementById("meme-image").style.borderColor = "black";
    document.getElementById("meme-image").style.borderWidth = "1px";
    document.getElementById("meme-image").style.borderStyle = "solid";
    document.getElementById("meme-image").style.backgroundColor = "white";
  };
  document.getElementById("image-input").addEventListener("change", changeImg)
};
