const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = window.innerWidth - 15;
const canvasHeight = (canvasWidth / 100) * 56;

canvas.setAttribute("width", canvasWidth);
canvas.setAttribute("height", canvasHeight);

function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
}

function drawCircle(positionX, positionY, diameter, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(positionX, positionY, diameter, 0, 2 * 3.14);
    ctx.fill();
}

function drawRect(positionX, positionY, sizeX, sizeY, color) {
    ctx.fillStyle = color;
    ctx.fillRect(positionX, positionY, sizeX, sizeY);
    ctx.fill();
}
