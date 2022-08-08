function preloadAudio(audioSrc, audioVolume, playbackRate, audioLoop) {
    const audio = new Audio(audioSrc);
    audio.playbackRate = playbackRate;
    audio.volume = audioVolume;
    audio.loop = audioLoop == "loop";

    return audio;
}

let musicBackgroud = preloadAudio("assets/sounds/crazy-frog.mp3", 0.4, 1.2, "loop");
let splashAudio = preloadAudio("assets/sounds/splash.wav", 1, 1);
let myPointAudio = preloadAudio("assets/sounds/my-point.wav", 1, 1);
let opponentPointAudio = preloadAudio("assets/sounds/opponent-point.wav", 1, 1);
let ballAudio = preloadAudio("assets/sounds/ball.wav", 1, 1);
let racketAudio = preloadAudio("assets/sounds/racket.wav", 1, 1);

document.addEventListener("click", () => {
    musicBackgroud.play();
});
