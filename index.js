
Conversation opened. 1 unread message.

Skip to content
Using Trinity Alps Unified School District Mail with screen readers

1 of 523
(no subject)
Inbox

Brodie Brower <35135@tausd.org>
9:20 AM (2 hours ago)
to me

console.log('Script Starting...')
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e){
    console.log(e.key);

    if (e.key == 'ArrowLeft'){
        //move left
        paddle.x -= paddle.hspeed;
    }
    else if (e.key == 'ArrowRight'){
        //move right
        paddle.x += paddle.hspeed;
    }
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
    haccelerate: 1,
    vaccelerate: 1,
    hspeed: 1,
    vspeed: 1,
    fill: 'green',
    stroke: 'green'
}


function moveWithBounce(circle){
    circle.hspeed += circle.haccelerate
    circle.vspeed += circle.vaccelerate
    circle.x += circle.hspeed;
    circle.y += circle.vspeed;

    if (circle.x-circle.radius < 0 || circle.x+circle.radius > canvas.width){
        circle.hspeed *= -1;
    }

    if (circle.x-circle.radius < 0 || circle.x+circle.radius > canvas.width){
        circle.haccelerate *= -1;
    }

    if (circle.y-circle.radius < 0 || circle.y+circle.radius > canvas.height){
        circle.vaccelerate *= -1;
    }


    if (circle.y-circle.radius < 0 || circle.y+circle.radius > canvas.height){
        circle.vspeed *= -1;
    }

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

drawLoop();
