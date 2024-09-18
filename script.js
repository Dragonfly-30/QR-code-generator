const form = document.getElementsByClassName("container")[0]; 
const button = form.querySelector(".qr-button");
const qrImage = document.querySelector(".qr-img")
const qrInput = form.querySelector(".qr-input");

console.log(form, button, qrImage)

form.addEventListener("submit", function(event){
  event.preventDefault();
  const input = qrInput.value;


  const image = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
  qrImage.src = image;

})