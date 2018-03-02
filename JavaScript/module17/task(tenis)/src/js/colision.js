let brickRowCount = 3;
let brickColumnCount = 5;
let canvas = document.getElementById('canvasGame');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let ballX = canvasWidth/2;
let ballY = canvasHeight - bottomBlockHeight;
let ballRad = 10;
let speedBallX = 2;
let speedBallY = -2;

let bricks = [];
for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}


let collisionDetection = function () {    // функция определения блоков
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1) {
                if(ballX + ballRad > b.x && ballX+ballRad < b.x+brickWidth && ballY+ballRad > b.y && ballY+ballRad < b.y+brickHeight) {
                    speedBallY = -speedBallY-1;
                    b.status = 0;
                }
            }
        }
    }
}

export {collisionDetection, brickColumnCount, brickRowCount, canvas, canvasHeight,canvasWidth, ballX,ballY,ballRad,speedBallX,speedBallY, bricks};