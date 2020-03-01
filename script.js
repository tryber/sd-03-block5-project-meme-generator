window.onload = function () {
  let addImage = document.getElementById("meme-insert");
  let addText = document.getElementById("text-input");
  let memeText = document.getElementById("meme-text");

  function criandoUrl() {
    let image = document.getElementById("meme-image");
    image.src = URL.createObjectURL(addImage.files[0]);
    image.style.height = 400 + "px";
    image.style.width = 400 + "px";
  };
  addImage.addEventListener("change", criandoUrl);

  function inputText() {
    memeText.textContent = addText.value;
  };
  addText.addEventListener("beforeinput", inputText);
}