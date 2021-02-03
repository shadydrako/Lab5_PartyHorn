 //main.js

let sounds = ["./assets/media/audio/air-horn.mp3","./assets/media/audio/car-horn.mp3","./assets/media/audio/party-horn.mp3"];

document.querySelector('button').addEventListener('click',function(){
    let s = 0;
    var form = document.querySelector("form");
    var radios = document.getElementsByName("radio-sound");
    for(let i = 0, length = radios.length; i < length; i++){
        if(radios[i].checked){
            s = i;
            break;
        }
    }
    document.getElementById("horn-sound").setAttribute('src',sounds[s]);
    let audio = document.getElementById("horn-sound");
    audio.play()
    event.preventDefault();
});


// TODO
