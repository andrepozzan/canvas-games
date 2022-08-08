function returnBallColorToStandard() {
    setTimeout(() => {
        ballColor = ballColors[0];
    }, colorTimeOut);
}

function checkBallAndWallCollision(ballPosition, axis) {
    if (ballPosition + ballDiameter > axis || ballPosition - ballDiameter < 0) {
        addPoint(axis, ballPosition);
        ballAudio.play();
        return true;
    } else {
        return false;
    }
}

function checkBallCollision(ballPosition, ballVelocity, axis, color) {
    let myRacketColision = checkRacketAndBallCollision(
        myRacketPositionX,
        myRacketPositionY
    );

    let opponentRacketColision = checkRacketAndBallCollision(
        opponentRacketPositionX,
        opponentRacketPositionY
    );

    if (myRacketColision || opponentRacketColision) {
        racketAudio.play();
    }

    if (
        checkBallAndWallCollision(ballPosition, axis) ||
        ((myRacketColision || opponentRacketColision) && axis != canvasHeight)
    ) {
        ballVelocity *= -1;
        ballColor = color;
        returnBallColorToStandard();
    }

    return ballVelocity;
}

function checkRacketAndBallCollision(racketPositionX, racketPositionY) {
    let myRacket = false;
    if (racketPositionX == myRacketPositionX) {
        myRacket = true;
    }

    let opponentRacket = false;
    if (racketPositionX == opponentRacketPositionX) {
        opponentRacket = true;
    }

    if (
        myRacket &&
        ballPositionY >= racketPositionY - racketWidth &&
        ballPositionY <= racketPositionY + racketHeight + racketWidth &&
        ballPositionX <= racketPositionX + racketWidth + (racketWidth / 10) * 8
    ) {
        ballPositionX += ballDiameter;
        console.warn("My racket");
        return true;
    }

    if (
        opponentRacket &&
        ballPositionY >= racketPositionY - racketWidth &&
        ballPositionY <= racketPositionY + racketHeight + racketWidth &&
        ballPositionX >= racketPositionX - racketWidth
    ) {
        ballPositionX -= ballDiameter;
        console.warn("Opponent racket");
        return true;
    }

    if (
        myRacket &&
        ballPositionX < racketPositionX + ballDiameter + racketWidth &&
        ballPositionY - ballDiameter < racketPositionY + racketHeight &&
        ballPositionY + ballDiameter > racketPositionY
    ) {
        return true;
    } else if (
        opponentRacket &&
        ballPositionX > racketPositionX - ballDiameter &&
        ballPositionY - ballDiameter < racketPositionY + racketHeight &&
        ballPositionY + ballDiameter > racketPositionY
    ) {
        return true;
    }
}
