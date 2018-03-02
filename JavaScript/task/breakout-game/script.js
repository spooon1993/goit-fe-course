let canvas = document.querySelector('#canvasGame');
let context = canvas.getContext('2d');
let width = canvas.width;
let height = canvas.height;
let padloHeight = 10;
let padloWidth = 75;
let brickHeight = 20;
let brickWidth = 75;
let ballRaduis = 15;
let ballX = width/2;
let ballY = height - padloHeight - ballRaduis;
let column = 6;
let line = 3;
let marginRight = 5;
let marginTop = 20;
let speedX = 2;
let speedY = 2;


function ball(x,y,color,radius) {
    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI, true);
    context.fill();
    context.closePath();
}

function rectangle(x,y,width,height,color) {
    context.fillStyle = color;
    context.fillRect(x,y,width,height);
}

function drawBricks(line,column) {
    for (let i = 0; i<line; i++) {
        for ( let j = 0; j<column; j++ ) {
            rectangle((brickWidth+marginRight)*j,(brickHeight+marginTop)*i,brickWidth,brickHeight,'rgba(117,187,70,0.8)');
        }
    }
}

drawBricks(line,column);
rectangle(width/2-35,height-padloHeight, padloWidth, padloHeight, 'blue');
ball(ballX, ballY,'red',ballRaduis);

function move() {
    ballX += speedX;
    ballY -= speedY;
    if ( ballX > width - ballRaduis ) {
        speedX =- speedX;
    } else if ( ballX < ballRaduis ) {
        speedX =- speedX;
    }
    if ( ballY < ballRaduis ) {
        speedY =- speedY;
    } else if ( ballY > height - padloHeight - ballRaduis) {
        speedY =- speedY;
    }
    context.clearRect(0,0, width,height);
}
function start() {
    setInterval(function () {
        move();
        drawGame();
    } ,1000/60)
}

function drawGame() {
    drawBricks(line,column);
    rectangle(width/2-35,height-padloHeight, padloWidth, padloHeight, 'blue');
    ball(ballX, ballY,'red',ballRaduis);
}

start();
