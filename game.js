var canvas;
var canvasContext;
var ballX = 50;
var ballY = 100;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    setInterval(drawEverything, 30);
}

function drawEverything() {
    ballX += 3;
    ballY += 3;
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(ballX, ballY, 10, 10);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(canvas.width/2-100, canvas.height/2-100, 200, 200);
}