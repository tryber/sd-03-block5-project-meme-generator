window.onload = function () {
  let txt = document.getElementById('text-input');
  let image = document.getElementById('uploadeImg');
  let imageUrl = document.getElementById('uploadeUrl');
  let memeImage = document.getElementById('meme-image');

  let openFile = function(event) {
      let input = event.target;
      let reader = new FileReader();
      reader.onload = function(){
        let dataURL = reader.result;
        memeImage.src = dataURL;
      };    
    reader.readAsDataURL(input.files[0]);
  };
  image.addEventListener('change', openFile)
}
