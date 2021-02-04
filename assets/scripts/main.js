// main.js
document.getElementById("volume-number").addEventListener("change", function(){
    
    var x = document.getElementById("volume-number").value;

    document.getElementById("volume-slider").value = x;

    document.getElementById("horn-sound").volume = x/100.0;

    if(x > 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(x > 33) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(x > 0) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    }
})



document.getElementById("volume-slider").addEventListener("change", function(){
    
    var x = document.getElementById("volume-slider").value;

    document.getElementById("volume-number").value = x;

    document.getElementById("horn-sound").volume = x/100.0;


    if(x > 66) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-3.svg";
    }
    else if(x > 33) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-2.svg";
    }
    else if(x > 0) {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-1.svg";
    }
    else {
        document.getElementById("volume-image").src = "./assets/media/icons/volume-level-0.svg";
    }
})


document.getElementById("radio-air-horn").addEventListener("change", function(){

    document.getElementById("sound-image").src = "./assets/media/images/air-horn.svg";

    document.getElementById("horn-sound").src = "./assets/media/audio/air-horn.mp3";
}) 

document.getElementById("radio-car-horn").addEventListener("change", function(){

    document.getElementById("sound-image").src = "./assets/media/images/car.svg";

    document.getElementById("horn-sound").src = "./assets/media/audio/car-horn.mp3";
}) 

document.getElementById("radio-party-horn").addEventListener("change", function(){

    document.getElementById("sound-image").src = "./assets/media/images/party-horn.svg";

    document.getElementById("horn-sound").src = "./assets/media/audio/party-horn.mp3";
}) 




document.getElementById("honk-btn").addEventListener("click", function(){
    
    var audio = new Audio('./assets/media/audio/air-horn.mp3');
    audio.play();

})