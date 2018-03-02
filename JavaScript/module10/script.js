// localStorage.setItem('data', '14.02.18');
// let data = localStorage.getItem('data');
// console.log(data);
// localStorage.removeItem('data');
//
// let dog = {
//     name: 'Mango',
//     age: 25,
//     isLive: true,
// };
//
// localStorage.setItem('dog', JSON.stringify(dog));
// // localStorage.removeItem('dog');
// let result = localStorage.getItem('dog');
// let convert = JSON.parse(result);
// console.log(result);
// console.log(convert);
// let stop = setInterval(function () {
//     let now = new Date();
//     console.log('today: -> ', now);
//     let year = now.getFullYear();
//     console.log('year', year);
//     let month = now.getMonth();
//     console.log(month);
//     let milisecond = now.getMilliseconds();
//     console.log(now.getSeconds());
//     console.log(milisecond);
// }, 1000);
// let button = document.querySelector('#stop');
// button.addEventListener('click', function () {
//     clearInterval(stop);
// });

let deadLine = new Date(2018, 2, 8, 10, 0, 0);
console.log('deadLine: -> ',deadLine);
// let now = new Date();
// console.log('now: -> ',now);
// let diff = deadLine - now;
// console.log(diff);
//
// let sec = Math.floor( diff / 1000 );
// console.log('sec: ',sec);
// let secLeft = sec % 60;
// console.log('secLeft: ',secLeft);
// let min = Math.floor( sec / 60 );
// console.log(min);
// let minLeft = min % 60;
// console.log('minLeft: -> ',minLeft);
// let hour = Math.floor( min / 60 );
// console.log(hour);
// let hourLeft = hour % 24;
// console.log('hourLeft: -> ',hourLeft);
// let day = Math.floor( hour / 24 );
// console.log(day);
//
// let days = document.querySelector('.days');
// days.textContent = day;
// let hours = document.querySelector('.hours');
// hours.textContent = hourLeft;
// let minutes = document.querySelector('.minutes');
// minutes.textContent = minLeft;
// let seconds = document.querySelector('.seconds');
// seconds.textContent = secLeft;

// let stopInterval = setInterval(function () {
//     let now = new Date();
//     console.log('now: -> ',now);
//     let diff = deadLine - now;
//     console.log(diff);
//
//     let sec = Math.floor( diff / 1000 );
//     console.log('sec: ',sec);
//     let secLeft = sec % 60;
//     console.log('secLeft: ',secLeft);
//     let min = Math.floor( sec / 60 );
//     console.log(min);
//     let minLeft = min % 60;
//     console.log('minLeft: -> ',minLeft);
//     let hour = Math.floor( min / 60 );
//     console.log(hour);
//     let hourLeft = hour % 24;
//     console.log('hourLeft: -> ',hourLeft);
//     let day = Math.floor( hour / 24 );
//     console.log(day);
//
//     let days = document.querySelector('.days');
//     days.textContent = day;
//     let hours = document.querySelector('.hours');
//     hours.textContent = hourLeft;
//     let minutes = document.querySelector('.minutes');
//     minutes.textContent = minLeft;
//     let seconds = document.querySelector('.seconds');
//     seconds.textContent = secLeft;
// } ,1000);
//
// let button = document.querySelector('#stop');
// button.addEventListener('click', function () {
//     clearInterval(stopInterval);
// });


let test = new Promise(( resolve, reject ) => {

});

let test2 = new Promise( function (resolve, reject) {
    setTimeout(function () {
        resolve('test2');
    }, 1000)
});

test2.then(function (data) {
    console.log(data);
    return data;
})
    .then(function (str) {
        return str.split('');
    })
    .then(function (arr) {
        return arr.reverse().join('');
    })
    .then(function (result) {
        console.log(result);
    });


