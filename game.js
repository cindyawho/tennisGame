var canvas;
var canvasContext;
var ballX = 50;
var ballSpeedX = 5;
var ballY = 100;
var ballSpeedY = 3;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    var framesPerSecond = 30;
    setInterval(function () {
        moveEverything();
        drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything(){
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if(ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    } else if(ballX < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if(ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    } else if(ballY < 0) {
        ballSpeedY = -ballSpeedY;
    }
}

function drawEverything() {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 210, 10, 100);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(ballX, ballY, 10, 10);
}