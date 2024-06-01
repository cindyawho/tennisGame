var canvas;
var canvasContext;

window.onload = function() {
    // console.log("Inside js file, hello world!");
    canvas = document.getElementById('gameCanvas');
    // console.log(canvas);
    canvasContext = canvas.getContext('2d');
    // console.log(canvasContext);
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    // console.log("The end of function.");
}