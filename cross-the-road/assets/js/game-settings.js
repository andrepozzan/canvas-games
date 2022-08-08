// ----> Actor <----
let myPoints = 0;

let actorWidth = canvasHeight / 10;

let actorPositionX = canvasWidth / 5;

let initialActorPositionY = canvasHeight - actorWidth;
let actorPositionY;

let actorVelocity = 1;

// ----> Cars <----
let carWidth = canvasHeight / 6.5;
let carHeight = carWidth / 2;

let maxVelocity = 1;
let minVelocity = 0.5;

function returnRandonCarVelocity(operator) {
    let pointsIncrease = myPoints / 100;
    if (operator == "add") {
        maxVelocity += pointsIncrease;
        minVelocity += pointsIncrease;
    } else if (operator == "remove") {
        maxVelocity -= pointsIncrease;
        minVelocity -= pointsIncrease;
    }

    return (Math.random() * (maxVelocity - minVelocity) + minVelocity).toFixed(2);
}

let carsVelocities = [];
function calcCarsVelocities(operator) {
    carsVelocities.length = 0;
    carsImages.forEach(() => {
        carsVelocities.push(returnRandonCarVelocity(operator));
    });
}
calcCarsVelocities();

let carParameterAdjustInHighwayLane = (canvasWidth / 55).toFixed(0);

let carsPositionsY = [
    carHeight * 2 + carParameterAdjustInHighwayLane * 1,
    carHeight * 3 + carParameterAdjustInHighwayLane * 1.1,
    carHeight * 4 + carParameterAdjustInHighwayLane * 1.4,
    carHeight * 7 + carParameterAdjustInHighwayLane * 1.6,
    carHeight * 8 + carParameterAdjustInHighwayLane * 2,
    carHeight * 9 + carParameterAdjustInHighwayLane * 2.2,
];

let carsPositionsX = [];

document.addEventListener("click", () => {
    streetSound.play();
    hornSound.play();
});
