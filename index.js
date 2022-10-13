
var drumArray= document.querySelectorAll(".drum");

for(var i=0; i < drumArray.length; i++) {

    drumArray[i].addEventListener("click",clicked);

}

document.addEventListener("keydown",keypress);

function clicked () {
  sound(this.innerHTML);
  animation(this.innerHTML);
}

function keypress() {
  sound(event.key);
  animation(event.key);
}




function sound(keyName) {
  switch (keyName) {
    case "w":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
    break;

    case "a":
      var kick_bass = new Audio('sounds/kick-bass.mp3');
      kick_bass.play();
    break;

    case "s":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
    break;

    case "d":
      var tom_1 = new Audio('sounds/tom-1.mp3');
      tom_1.play();
    break;

    case "j":
      var tom_2 = new Audio('sounds/tom-2.mp3');
      tom_2.play();
    break;

    case "k":
      var tom_3 = new Audio('sounds/tom-3.mp3');
      tom_3.play();
    break;

    case "l":
      var tom_4 = new Audio('sounds/tom-4.mp3');
      tom_4.play();
    break;

    default: console.log(name);

  }
}


function animation(key) {
  var keyClass = "." + key;
  var selectedButton = document.querySelector(keyClass);

  selectedButton.classList.add("pressed");

  setTimeout(function() {
  selectedButton.classList.remove("pressed");
},100);
}
