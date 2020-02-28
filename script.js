window.onload = function() {
  let inputText = document.getElementById("text-input");
  let inputImage = document.querySelector("#image-input");
  
  function UploadingImage(event) {
    let img = document.getElementById("meme-image")
    img.src = URL.createObjectURL(event.target.files[0]);;
  }

  inputImage.addEventListener("change", UploadingImage);
}
