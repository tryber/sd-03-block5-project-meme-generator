function changedImg() {
  let memeImg = document.querySelector("img");
  let file = document.querySelector("input[type=file]").files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    memeImg.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    memeImg.src = "";
  }
}

function changedText() {
  let imgText = document.querySelector("#text-input").value;
  console.log(imgText);
  document.getElementById("meme-text").innerHTML = imgText;
}
