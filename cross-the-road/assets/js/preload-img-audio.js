function preloadImage(imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    return img;
}

function preloadAudio(audioSrc, audioVolume, playbackRate, audioLoop) {
    const audio = new Audio(audioSrc);
    audio.playbackRate = playbackRate;
    audio.volume = audioVolume;
    audio.loop = audioLoop == "loop";
    return audio;
}

let roadImage = preloadImage("assets/img/road.jpg");
let actorImage = preloadImage("assets/img/actor-1.png");

let car1Image = preloadImage("assets/img/car-esq-1.png");
let car2Image = preloadImage("assets/img/car-esq-2.png");
let car3Image = preloadImage("assets/img/car-esq-3.png");
let car4Image = preloadImage("assets/img/car-dir-1.png");
let car5Image = preloadImage("assets/img/car-dir-2.png");
let car6Image = preloadImage("assets/img/car-dir-3.png");

let carsImages = [car1Image, car2Image, car3Image, car4Image, car5Image, car6Image];

let streetSound = preloadAudio("assets/sounds/street.mp3", 0.8, 1, "loop");
let hornSound = preloadAudio("assets/sounds/horn.mp3", 0.5, 1, "loop");
let hornSequenceSound = preloadAudio("assets/sounds/horn-sequence.mp3", 1, 1);
let crashSound = preloadAudio("assets/sounds/crash.mp3", 1, 2);

function drawImage(img, positionStartX, positionStartY, positionFinishX, positionFinishY) {
    ctx.drawImage(img, positionStartX, positionStartY, positionFinishX, positionFinishY);
}
