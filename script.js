window.onload = function() {
  let inputText = document.getElementById("text-input");
  let inputImage = document.querySelector("#meme-insert");
  let paragraph = document.getElementById("meme-text");
  
  function UploadingImage() {
    let img = document.getElementById("meme-image")
    img.src = URL.createObjectURL(inputImage.files[0]);
  }
  inputImage.addEventListener("change", UploadingImage);

  function writingText() {
    paragraph.innerHTML = inputText.value
  }
  
  inputText.addEventListener("keyup", writingText);

  let button1 = document.getElementById("button1");
  let button2 = document.getElementById("button2");
  let button3 = document.getElementById("button3");
  let containerImage = document.getElementById("image-container");

  function border1() {
    containerImage.style.border = "3px dashed red";
  }

  button1.addEventListener("click", border1);

  function border2() {
    containerImage.style.border = "5px double blue";
  }

  button2.addEventListener("click", border2);

  function border3() {
    containerImage.style.border = "6px groove green";
  }

  button3.addEventListener("click", border3)


}
