console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const Changer = document.getElementById('AttChange');
const ctx = canvas.getContext('2d');
const hAccel = document.getElementById('hAccel');

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e){
    console.log(e.key);
}

function drawCircle(x, y, radius, fill, stroke, startAngle=0, endAngle=360){
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
    ctx.stroke();
}


const circle = {
    x: 32, 
    y: 32,
    radius: 16,
    haccelerate: .25,
    vaccelerate: 1,
    hspeed: 1,
    vspeed: 1,
    fill: 'green',
    stroke: 'green'
}


function moveWithBounce(circle){
    console.log(circle.vspeed);
    circle.hspeed += circle.haccelerate;
    circle.vspeed += circle.vaccelerate;
    circle.x += circle.hspeed;
    circle.y += circle.vspeed;

    if (circle.hspeed >= 5 || circle.hspeed <= -5){
        circle.haccelerate = 0;
    }

    if (circle.x-circle.radius < 0 || circle.x+circle.radius > canvas.width){
        circle.hspeed *= -1;
    }

    if (circle.x-circle.radius < 0 || circle.x+circle.radius > canvas.width){
        circle.haccelerate *= -1;
    }

    if (circle.y-circle.radius < 0 || circle.y+circle.radius > canvas.height){
        circle.vspeed *= -1;
    }

}

function changeAttributes(){
    //stop animation
    cancelAnimationFrame(drawLoop);
    //clear current attributes
    
    //append new attributes

    //continue animation
    drawLoop();
}

function drawLoop(){
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update
    moveWithBounce(circle);

    //draw objects
    drawCircle(circle.x, circle.y, circle.radius, circle.fill, circle.stroke);
    //call drawLoop
    requestAnimationFrame(drawLoop);
}


Changer.onclick = changeAttributes;

drawLoop();













