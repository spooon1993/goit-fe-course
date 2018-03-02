import './css/style.scss'
import {keyDownHandler, keyUpHandler, leftMove, rightMove} from "./js/move";

// делаем игру

let canvas = document.getElementById('canvasGame');
let context = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;
let bottomBlockWidth = 75;
let bottomBlockHeight = 10;
let bottomBlockX = canvasWidth/2-bottomBlockWidth/2;
let bottomBlockY=canvasHeight-bottomBlockHeight;
let brickWidth = 75;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 30;
let brickOffsetLeft = 30;
let brickRowCount = 3;
let brickColumnCount = 5;
let ballX = canvasWidth/2;
let ballY = canvasHeight - bottomBlockHeight;
let ballRad = 10;
let marginBrickRight = 10;
let marginBrickLeft =20;
let speedBallX = 2;
let speedBallY = -2;




let bricks = [];
for(let c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(let r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}
// условия задания клавиш передвижения блока
document.addEventListener("keydown", keyDownHandler, false); // блокировка всех клавиш кроме заданых
document.addEventListener("keyup", keyUpHandler, false);



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
// переписуем это в функцию
let ball = function (x,y,color,radius) { // рисует шар
    context.beginPath();
    context.fillStyle = color;
    context.arc(x,y,ballRad,0,2*Math.PI, true);
    context.fill();
    context.closePath();
};
let rectangle = function (x,y,color,width, height) {// рисует платформу
    context.fillStyle=color;
    context.fillRect(x,y,width,height);
};
// let drawBricks = function () { // рисует блоки
//     for (let i = 5; i<canvasWidth; i+=brickWidth+marginBrickRight) {
//         for (let j = 5; j<canvasHeight/2; j+=brickHeight + marginBrickLeft){
//             rectangle(i,j,'green', brickWidth,brickHeight);
//         }
//     }
// };
// перерисовуем функцию отрисовки блоков

let buildBricks = function () {
    for (let c=0; c< brickColumnCount;c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY
                rectangle(brickX, brickY, 'green', brickWidth, brickHeight);
            }
        }
    }
};
let drawGame = function () { // отрисовует все элементы игры после каждого движения шарика
    buildBricks();
    // collisionDetection();
    buildBricks();
    ball(ballX,ballY,'red',ballRad);
    rectangle(bottomBlockX,bottomBlockY,'blue',bottomBlockWidth,bottomBlockHeight);

};
// движение шара
let mooveBall = function () { // создает смещение нашего шарика
    context.clearRect(0, 0, canvas.width, canvas.height); // очищает след после шарика, также очищает и весь канвас
    ballX+=speedBallX;// задаем шаг смещения шара в момент интервала
    ballY-=speedBallY;
    // условие отскакивания от стен
    if (ballX > canvasWidth-ballRad || ballX < ballRad) {
        speedBallX=-speedBallX
    }
    if (ballY  < ballRad*2) {
        speedBallY=-speedBallY
    } else  if (ballY> canvasHeight-ballRad) {
        if (ballX > bottomBlockX && ballX < bottomBlockX + bottomBlockWidth){
            speedBallY=-speedBallY
        }
        else if (ballY >canvasHeight) { //условия проиграша
            alert('fuck u')
            ballX = canvasWidth/2;
            ballY = canvasHeight-30;
            speedBallX = 3;
            speedBallY = 3;
            bottomBlockX = (canvasWidth=bottomBlockWidth)/2;
            document.location.reload();
        }
    }
    // условие передвижения нашего блока
    if (rightMove && bottomBlockX < canvasWidth - bottomBlockWidth ) {
        bottomBlockX+=5;
    }
    else if (leftMove && bottomBlockX > 0) {
        bottomBlockX -=5;
    }
};
let startBallSpeed = function () { // задаем скорость смещения
    setInterval(function () {

        mooveBall(); // вызываем функцию и рисуем движени мяча
        drawGame(); //вызываем функцию и рисуем всю графику после каждого движения мяча, так как происходит очистка всего канваса для удаления следа шара
        collisionDetection()
    },10)
};
startBallSpeed();


//1 функция конструктор
//2 вси функции пропысаты як методи прототипа даннои функции конструктора
//3 добавить зысы где надо





