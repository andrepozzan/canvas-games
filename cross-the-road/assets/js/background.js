// 16:9 Screen
const canvasWidth = window.innerWidth - 15;
const canvasHeight = (canvasWidth / 100) * 56.25;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

function drawRoad() {
    drawImage(roadImage, 0, 0, canvasWidth, canvasHeight);
}

function drawPoints() {
    let fontWidth = canvasWidth / 20;
    ctx.fillStyle = "white";
    ctx.font = `${fontWidth}px serif`;

    ctx.textAlign = "center";
    ctx.fillText(
        myPoints,
        canvasWidth / 5 + actorWidth / 2,
        fontWidth - canvasHeight / 60
    );
}
