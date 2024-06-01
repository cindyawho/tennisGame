var canvas;
var canvasContext;

window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    drawEverything();
}

function drawEverything() {
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "red";
    canvasContext.fillRect(200, 200, 50, 25);
    canvasContext.fillStyle = "white";
    canvasContext.fillRect(canvas.width/2-100, canvas.height/2-100, 200, 200);
}