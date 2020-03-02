window.onload = startThePage();

function startThePage() {
  let imgText = document.querySelector("#text-input").value;
  let imgMeme = document.querySelector("#meme-insert").value;
  console.log(imgMeme);
  console.log(imgText);
}
function changedImg() {
  console.log(imgMeme);
}
function changedText() {
  console.log(imgText);
}
