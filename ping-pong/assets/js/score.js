function drawPoints() {
    let fontWidth = canvasWidth / 15;
    ctx.fillStyle = "white";
    ctx.font = `${fontWidth}px serif`;

    ctx.textAlign = "right";
    ctx.fillText(myPoints, canvasWidth / 2 - 20, fontWidth);
    ctx.textAlign = "center";
    ctx.fillText("/", canvasWidth / 2, fontWidth);
    ctx.textAlign = "left";
    ctx.fillText(opponentPoints, canvasWidth / 2 + 20, fontWidth);
}

function addPoint(axis, ballPosition) {
    if (axis == canvasWidth && ballPosition > canvasWidth / 2) {
        myPoints++;
        splashAudio.play();
        myPointAudio.play();
    } else if (axis == canvasWidth && ballPosition < canvasWidth / 2) {
        opponentPoints++;
        opponentPointAudio.play();
    }
}
