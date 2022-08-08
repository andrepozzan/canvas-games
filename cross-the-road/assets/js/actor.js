function drawActor() {
    drawImage(
        actorImage,
        actorPositionX,
        actorPositionY,
        actorWidth,
        actorWidth
    );
}

function returnActorToStart() {
    actorPositionY = initialActorPositionY;
}
returnActorToStart();

function actorCanMove() {
    if (actorPositionY + actorWidth > canvasHeight) {
        returnActorToStart();
    }
}

function moveActor() {
    let direction;

    document.addEventListener("keydown", function (event) {
        const key = event.key;

        if (key == "ArrowUp") {
            direction = "up";
        } else if (key == "ArrowDown") {
            direction = "down";
        }
    });

    document.addEventListener("keyup", function (event) {
        const key = event.key;

        if (key == "ArrowUp") {
            direction = "none";
        } else if (key == "ArrowDown") {
            direction = "none";
        }
    });

    setInterval(() => {
        if (direction == "up") {
            actorPositionY -= actorVelocity;
        } else if (direction == "down") {
            actorPositionY += actorVelocity;
        }
    });
}

moveActor();

function verifyAxisCollision(i, axis1, parameter1, axis2, parameter2) {
    if (axis1 + parameter1 > axis2[i] && axis1 < axis2[i] + parameter2) {
        return true;
    }
}

function verifyActorAndCarsCollision() {
    carsImages.forEach((e, i) => {
        if (
            verifyAxisCollision(
                i,
                actorPositionX,
                actorWidth,
                carsPositionsX,
                carWidth
            ) &&
            verifyAxisCollision(
                i,
                actorPositionY,
                actorWidth,
                carsPositionsY,
                carHeight
            )
        ) {
            crashSound.play();

            if (myPoints > 0) {
                calcCarsVelocities("remove");
                myPoints--;
            }

            returnActorToStart();
        }
    });
}

function verifyActorArrivedOnTheOtherSide() {
    if (actorPositionY < 30) {
        myPoints++;
        hornSequenceSound.play();
        calcCarsVelocities("add");
        returnActorToStart();
    }
}
