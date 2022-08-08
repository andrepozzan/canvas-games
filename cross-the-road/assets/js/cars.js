function drawCar(imgSrc, positionStartX, positionStartY) {
    drawImage(imgSrc, positionStartX, positionStartY, carWidth, carHeight);
}

function moveCar(carPositionX, velocity, i) {
    if (carPositionX > -carWidth && i <= carsImages.length / 2 - 1) {
        carPositionX -= velocity;
    } else if (i <= carsImages.length / 2 - 1) {
        carPositionX = canvasWidth + carWidth;
    } else if (carPositionX < canvasWidth + carWidth) {
        carPositionX -= -velocity;
    } else {
        carPositionX = -carWidth;
    }

    return carPositionX;
}

function drawCars() {
    carsImages.forEach((e, i) => {
        drawCar(carsImages[i], carsPositionsX[i], carsPositionsY[i]);
        carsPositionsX[i] = moveCar(carsPositionsX[i], carsVelocities[i], i);
    });
}
