let textBox = document.querySelector("#text-input")
  textBox .addEventListener("input", makeText)

let text = document.querySelector(".text")

let image = document.getElementById("meme-insert")
  image.addEventListener("change", selectedImage)

function selectedImage() {
  let arquivo = this.files[0]
  let img = document.getElementsByTagName("img")
  img[0].src = URL.createObjectURL(arquivo)
}

function makeText() {
  text.innerHTML = textBox.value
}