setInterval(() => {
    ballVelocityX = checkBallCollision(ballPositionX, ballVelocityX, canvasWidth, "red");
    ballVelocityY = checkBallCollision(ballPositionY, ballVelocityY, canvasHeight, "orange");

    ballPositionX += ballVelocityX;
    ballPositionY += ballVelocityY;

    drawBackground();

    drawRect(myRacketPositionX, myRacketPositionY, racketWidth, racketHeight, "red");

    if (ballPositionX > (canvasWidth / 5) * 4) {
        moveOpponentRacket();
    }

    drawRect(opponentRacketPositionX, opponentRacketPositionY, racketWidth, racketHeight, "red");
    drawPoints();
    drawCircle(ballPositionX, ballPositionY, ballDiameter, ballColor);
});
