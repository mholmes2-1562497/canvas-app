`use strict`;
//creates canvas
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
ctx.strokeStyle = 2;

//sets canvas background as an image of the united states 
let background = new Image();
background.src = src = "img/unitedStates.png";

let state = {
    mousedown: false,
    color: "black",
    width: 15 
};
// Make sure the image is loaded first otherwise nothing will draw.
background.onload = function () {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
}
//draws the border of the canvas 
ctx.strokeStyle = "#000000";  
ctx.lineWidth = 10;       
ctx.strokeRect(0, 0, ctx.canvas.width, ctx.canvas.height);

//when the mouse is down, the canvas will move to and begin a path for the user to draw
canvas.addEventListener("mousedown", function (e) {
    state.mousedown = true;
    ctx.moveTo(e.offsetX, e.offsetY);
    ctx.beginPath();
    ctx.strokeStyle = state.color;
    ctx.lineWidth = state.width; 
});

//when the mouse moves, a line is drawn to where the mouse moved 
canvas.addEventListener('mousemove', function (event) {
    if (state.mousedown == true) {
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
    }
})

//when the mouse is up, the state of the mouse changes so that nothing is drawn
canvas.addEventListener("mouseup", function () {
    state.mousedown = false;
});

//adds an object that users can choose a color with
document.getElementById("picker").addEventListener('change', function(){
    state.color = document.getElementById("picker").value; 
})

//adds ojbect to select the stroke size of their 'brush'
document.getElementById("width").addEventListener('change', function(){
    state.width = document.getElementById("width").value; 
})