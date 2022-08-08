const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

setInterval(() => {
    drawRoad();
    drawActor();
    drawCars();
    verifyActorAndCarsCollision();
    verifyActorArrivedOnTheOtherSide();
    drawPoints();
    actorCanMove();
});
