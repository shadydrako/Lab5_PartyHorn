 //main.js

let sounds = ["./assets/media/audio/air-horn.mp3","./assets/media/audio/car-horn.mp3","./assets/media/audio/party-horn.mp3"];

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
    audio.play()
    event.preventDefault();
});


// TODO
