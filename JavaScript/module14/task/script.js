function Car(carX,carY,speed,img, id) {
    this.carX = carX;
    this.carY = carY;
    this.speed = speed;
    this.img = img;
    this.id = id;
}

let bmw = new Car(0, 0, 2, 'img/BMW%20X6.png', 'bmw');
let chevrolet = new Car(0, 100, 3, 'img/Chevrolet%20Camaro.png', 'chevrolet');
let audi = new Car(0, 200, 4, 'img/Audi%20R8.png', 'audi');

Car.prototype.drawCar = function() {
    let container = document.querySelector('.container');
    container.innerHTML += `<img src="${this.img}" class="cars" id="${this.id}" style="top: ${this.carY}px; left: ${this.carX}px">`;
};

audi.drawCar();
bmw.drawCar();
chevrolet.drawCar();

Car.prototype.moveCarRight = function () {
  this.carX += this.speed;
    let imgSrc = document.querySelector(`[src="${this.img}"]`);
    imgSrc.style.left = this.carX + 'px';
    // let img = document.querySelector(`#${this.id}`);
    // img.style.left = this.carX + 'px';
};

Car.prototype.moveCarKey = function (keyCode) {
    if ( keyCode === 100 ) {
        this.carX = this.carX + this.speed;
    } else if ( keyCode === 97 ) {
        this.carX = this.carX - this.speed;
    } else if ( keyCode === 119 ) {
        this.carY = this.carY - this.speed;
    } else if ( keyCode === 115 ) {
        this.carY = this.carY + this.speed;
    }
    let imgSrc = document.querySelector(`[src="${this.img}"]`);
    imgSrc.style.left = this.carX + 'px';
    imgSrc.style.top = this.carY + 'px';
};

document.addEventListener('keypress', function () {
    bmw.moveCarKey(event.keyCode);
});


let moveInterval;
let btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', function () {
    moveInterval = setInterval(function () {
        bmw.moveCarRight();
        chevrolet.moveCarRight();
        audi.moveCarRight();
    } ,1000 / 60);
});

let btnStop = document.querySelector('.btn-stop');
btnStop.addEventListener('click', function () {
    clearInterval(moveInterval);
});

