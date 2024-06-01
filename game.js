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
    //next line blanks our the screen with black
    colorRect(0, 0, canvas.width, canvas.height, "black");

    //this is the left player paddle
    colorRect(0, 210, 10, 100, "white");

    //next line draw the ball
    colorCircle(ballX, ballY, 10, "white")
}

function colorCircle(centerX, centerY, radius, drawColor) { 
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI*2, true);
    canvasContext.fill();
}

function colorRect(leftX, topY, width, height, drawColor){
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);
}