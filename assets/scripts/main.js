 //main.js

 
function playSound(){
    alert( "The button was pressed");
    var audioElement = new Audio('assets\media\audio\air-horn.mp3');
    audioElement.muted=false;
    audioElement.play();
}

var btn = document.querySelector('button').addEventListener("click",playSound());


 
// TODO
