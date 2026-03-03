
console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const Changer = document.getElementById('AttChange');
const ctx = canvas.getContext('2d');
const hAccel = document.getElementById('hAccel');
const vAccel = document.getElementById('vAccel');
const hspeed = document.getElementById('hSpeed');
const vspeed = document.getElementById('vSpeed');
const color = document.getElementById('color');
const size = document.getElementById('size');
const startPosx = document.getElementById('startingPosx');
const startPosy = document.getElementById('startingPosy')
let FrameCount = 1;

document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e){
    console.log(e.key);
}

function drawCircle(x, y, radius, fill, startAngle=0, endAngle=360){
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(x, y, radius, startAngle, endAngle);
    ctx.fill();
}


let circle = {
    x: 32, 
    y: 32,
    radius: 16,
    haccelerate: .25,
    vaccelerate: 1,
    hspeed: 1,
    vspeed: 1,
    fill: 'green'
}


function moveWithBounce(circle){
    //console.log(circle.vspeed);
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

function changeAttributes(circle){
    //stop animation
    //append new properties
    circle.vaccelerate = Number(vAccel.value);
    circle.vspeed = Number(vspeed.value);
    circle.hspeed = Number(hspeed.value);
    circle.radius = Number(size.value);
    circle.x = Number(startPosx.value);
    circle.y = Number(startPosy.value);
    circle.haccelerate = Number(hAccel.value);
    circle.fill = color.value;
    console.log(circle)
    //continue 
}

function drawLoop(){
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update
    moveWithBounce(circle);
    //draw objects
    drawCircle(circle.x, circle.y, circle.radius, circle.fill);
    //call drawLoop
    requestAnimationFrame(drawLoop);
}

Changer.onclick = () => changeAttributes(circle);

drawLoop();





