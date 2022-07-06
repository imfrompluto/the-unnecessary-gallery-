// document.querySelector('button').onclick 
let currentimage = 8
let img = document.getElementsByClassName("img")[0]
let container = document.getElementById('container');
let bigimage = document.getElementById('bigimage');
let title = document.getElementById('title');
let palette = ["ffc8dd", "cdb4db", "d0f4de", "fcf6bd", "ffcfd2", "cae9ff"] 
console.log(title);
container.onclick = function () {
  container.style.transform = "translateY(-100%)"
}
console.log(img);

let rightArrow = document.getElementsByClassName("rightArrow")[0]
console.log(rightArrow);
rightArrow.onclick = function (event) {
  console.log("next pictures");
  event.stopPropagation();

    currentimage = currentimage + 1
    if(currentimage == 9){
      currentimage = 0
    }
    bigimage.src = currentimage + ".jpg"


}

let leftArrow = document.getElementsByClassName("leftArrow")[0]
console.log(leftArrow)
leftArrow.onclick = function(event){
  console.log(Math.console == -(Number));
console.log(currentimage);
event.stopPropagation();

currentimage = currentimage - 1
    if(currentimage == -1){
      currentimage = 8
    }
    bigimage.src = currentimage + ".jpg"


}
function openImage(imagenumber) {
  currentimage = imagenumber
  container.style.transform = "translateY(0%)"
  bigimage.src = imagenumber + ".jpg"
  title.style.color = "#"+ palette[Math.floor(Math.random()*6)]

}

function resizeText() {
  document.getElementsByTagName("h1")[0].style.fontSize = "200px"
}


