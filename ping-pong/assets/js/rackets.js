function moveRacket() {
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
            myRacketPositionY -= racketVelocity;
        } else if (direction == "down") {
            myRacketPositionY += racketVelocity;
        }
    });
}
moveRacket();

let changeOfError = 0;

function calculateChangeOfError() {
    if (opponentPoints > myPoints) {
        changeOfError++;
        changeOfError = 100;
    } else {
        changeOfError = 0;
    }
}

function moveOpponentRacket() {
    calculateChangeOfError();

    let velocity = racketVelocity;
    if (opponentRacketPositionY < ballPositionY + changeOfError && opponentRacketPositionY + racketHeight > ballPositionY) {
        velocity = 0;
    } else if (opponentRacketPositionY < ballPositionY) {
        opponentRacketPositionY += velocity;
    } else if (opponentRacketPositionY + racketHeight > ballPositionY) {
        opponentRacketPositionY -= velocity;
    }
}
