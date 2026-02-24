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
    radius: 32,
    hspeed:2,
    vspeed: 2,
    fill: 'green',
    stroke: 'green'
}

const paddle =  {
    x: canvas.width/2,
    y: 550,
    width: 128,
    height: 32,
    hspeed: 8,
    color: 'red'
}

function moveWithBounce(circle){
        circle.x += circle.hspeed;
    circle.y += circle.vspeed;

    if (circle.x-circle.radius < 0 || circle.x+circle.radius > canvas.width){
        circle.hspeed *= -1;
    }

    if (circle.y-circle.radius < 0 || circle.y+circle.radius > canvas.height){
        circle.vspeed *= -1;
    }

}

function drawRectObj(rectObj){
    ctx.fillStyle = rectObj.color,
    ctx.fillRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height)
}
function drawLoop(){
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //update
    moveWithBounce(circle);

    //draw objects
    drawCircle(circle.x, circle.y, circle.radius, circle.fill, circle.stroke);
    drawRectObj(paddle);
    //call drawLoop
    requestAnimationFrame(drawLoop);
}


drawLoop();
