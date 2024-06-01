var canvas;
var canvasContext;
var ballX = 50;
var ballY = 100;

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
    ballX += 3;
    ballY += 3;
}

function drawEverything() {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(0, 210, 10, 100);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(ballX, ballY, 10, 10);
}