 //main.js

let sounds = ["./assets/media/audio/air-horn.mp3","./assets/media/audio/car-horn.mp3","./assets/media/audio/party-horn.mp3"];
let images = ["./assets/media/icons/volume-level-0.svg", "./assets/media/icons/volume-level-1.svg","./assets/media/icons/volume-level-2.svg", "./assets/media/icons/volume-level-3.svg"];
let lvl = 1;
let nosound = false;
/* 
*   When the slider value changes the textual indicator also changes.
*   When the textual indicator changes, the visual should also change.
*/

document.getElementById("volume-number").addEventListener("input",function(){
    var val = document.getElementById("volume-number").value;
    if(val == 0){
        nosound = true;
    }
    lvl = val/100;
    document.getElementById("volume-slider").value = val;
});

document.getElementById("volume-slider").addEventListener("input",function(){
    var val = document.getElementById("volume-slider").value;
    if(val == 0){
        nosound = true;
    }
    document.getElementById("volume-number").value = val; 
});


//add event listener to each button to change picture
document.getElementById("radio-air-horn").addEventListener("change",function(){
    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";
    document.getElementById("horn-sound").setAttribute('src',sounds[0]);
});

document.getElementById("radio-car-horn").addEventListener("change",function(){
    document.getElementById("sound-image").src = "./assets/media/images/car.svg";
    document.getElementById("horn-sound").setAttribute('src',sounds[1]);
});

document.getElementById("radio-party-horn").addEventListener("change",function(){
    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";
    document.getElementById("horn-sound").setAttribute('src',sounds[2]);
});



document.querySelector('button').addEventListener('click',function(){
    let audio = document.getElementById("horn-sound");
    audio.volume = lvl;
    audio.mute = nosound;
    audio.play();
    event.preventDefault();
});


// TODO
