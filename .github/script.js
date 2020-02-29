window.onload = function () {
  let addImage = document.getElementById("meme-image");
  let addText = document.getElementById("text-input");
  let memeText = document.getElementById("meme-text");

  function criandoUrl(event) {
    let image = document.getElementById("meme-image-container");
    image.src = URL.createObjectURL(event.target.files[0]);
  };
  addImage.addEventListener("change", criandoUrl);

  function inputText(input) {
    memeText.textContent = input.target.value;
  }
  addText.addEventListener("beforeinput", inputText);
}