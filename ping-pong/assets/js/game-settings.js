let myPoints = 0;
let opponentPoints = 0;

const ballColors = ["white", "red", "orange"];

let ballVelocity = canvasWidth / 300;
let ballVelocityX = ballVelocity + canvasWidth / 500;
let ballVelocityY = ballVelocity;

let ballDiameter = canvasWidth / 100 + canvasHeight / 100;

let ballPositionY = canvasHeight / 2;
let ballPositionX = canvasWidth / 2;

let ballColor = ballColors[0];

let colorTimeOut = 200;

let racketWidth = canvasHeight / 40;
let racketHeight = canvasHeight / 4;

let myRacketPositionX = canvasWidth / 100;
let myRacketPositionY = canvasHeight / 2 - racketHeight / 2;

let opponentRacketPositionX = canvasWidth - racketWidth - canvasWidth / 100;
let opponentRacketPositionY = canvasHeight / 2 - racketHeight / 2;

let racketVelocity = canvasHeight / 200;
