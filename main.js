var mouseevent = "";
var last_x , last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width = 1;

canvas.addEventListener("mousedown",mymousedown);

function mymousedown(e) {
    color = document.getElementById("color").value;
width = document.getElementById("width").value;
mouseevent = "mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
   mouseevent = "mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
   mouseevent = "mouseleave";
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e) {
    current_x = e.clientX-canvas.offsetLeft;
    current_y = e.clientY-canvas.offsetTop;

    if (mouseevent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x , last_y);
        ctx.lineTo(current_x , current_y);
        ctx.stroke();

    }
    last_x = current_x;
    last_y = current_y;
}
var s_width = screen.width;
var new_width = screen.width - 70;
var new_height = screen.height - 300;

if (s_width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;  
    document.body.style.overflow = "hidden";//It is used to make body non scrolabble
}



canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("color").value;
width = document.getElementById("width").value;
console.log("touch started !!!!!");
last_x = e.touches[0].clientX-canvas.offsetLeft;
last_y = e.touches[0].clientY-canvas.offsetTop;
}


canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e) {
    current_x = e.touches[0].clientX-canvas.offsetLeft;
    current_y = e.touches[0].clientY-canvas.offsetTop;
    console.log ("my touchmove started");
 
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_x , last_y);
        ctx.lineTo(current_x , current_y);
        ctx.stroke();


    last_x = current_x;
    last_y = current_y;
}
function cleararea() 
{ ctx.clearRect(0, 0, canvas.width, canvas.height); }