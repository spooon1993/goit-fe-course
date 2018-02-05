// let a = ["https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg", "http://kb4images.com/images/picture/37509081-picture.jpg",
//     "http://i.telegraph.co.uk/multimedia/archive/03597/POTD_chick_3597497k.jpg",
//     "http://cdn.newsapi.com.au/image/v1/9fdbf585d17c95f7a31ccacdb6466af9"];
//
// let container = document.querySelector('.box');
// console.log(container);
// let str = '';
// for ( let i = 0; i <a.length; i++ ) {
//     str += `<img src=${a[i]} class="img">`;
// }
// container.innerHTML = str;
//
// let container2 = document.querySelector('.box2');
// let str2 = '';
// for ( let i = 0; i<a.length; i++ ) {
//     str2 += `<img src=${a[i]} class="img">`;
// }
// container2.innerHTML = str2;

// function add (a,b) {
//     return a + b;
// }
//
// function minus (a,b) {
//     return a - b;
// }

// scope
// const outerString = 'меня видно внутри и снаружи';
// function showMessage() {
//     const innerString = 'меня видно внутри';
//     console.log(outerString);
//     console.log(innerString);
//     // console.log(thirdString);
//     function show() {
//         const thirdString = 'я тут';
//         console.log('show ',outerString);
//         console.log('show ',innerString);
//         console.log('show ',thirdString);
//     }
//     show();
// }
// showMessage();
// console.log(outerString);
// console.log(innerString);

// function add ( a = 5, b = 10 ) {
//     return a + b;
// }
// let res1 = add();
// let res2 = add(100, 200);
// console.log(res1);
// console.log(res2);


// function add(a,b) {
//     return a + b;
// }
// const add2 = (x, y) => {
//     return x + y;
// };
// const add3 = (x,y) => x + y;
//
// console.log(add(5,10));
// console.log(add2(5,10));
// console.log(add3(5,10));

// function add(a,b) {
//     console.log(arguments);
//     let arr = Array.from(arguments);
//     console.log(arr);
// }
// add(2,3,5,4);

// let arr = [0,2,4];
// let arr2 = [];
// for ( let i = 0; i<arr.length; i++ ) {
//     arr2.push(arr[i] + 2);
// }
// console.log(arr2);

// map
// let arr2 = arr.map(function (item) {
//     return item + 2;
// });
// console.log(arr2);
//
// let arr3 = arr.map( item => item + 2 );
// console.log(arr3);

// const numbers = [1,2,6,9,12];
// let numberadd = numbers.map(function (num, index) {
//     return num + index;
// });
// console.log(numberadd);

// const numbers = [0,1,2,3,4,5,6,7,8,9];
// let even = numbers.filter(function (item) {
//     return item % 2 === 0;
// });
// console.log(even);
//
// let odd = numbers.filter(item => item % 2 !== 0 );
// console.log(odd);
// const login  = ['Einstein', 'Newton', 'Galilei', 'Copernicus'];
//
// let findlogin = login.find(item => item === 'Newton');
// console.log(findlogin);

// const hours = [9,8,8,8,10,5];
//
// let totalHours = hours.reduce(function (acum, next) {
//     return acum + next;
// });
// console.log(totalHours);

// const prices = [15000,10000,8000,9000,32000,5000,100,10000,172000];
//
// let total = prices.reduce((acum, item) => acum + item);
//
// console.log('UAH ',total);
// console.log('$ ',total/28);

// const money = [100,500,300,250];
// let go = money.every(item => item >=100);
// console.log(go);

// const  money2 = [100,500,300,250];
// let go2 = money2.some(item => item >=500);
// console.log(go2);

// sort -1 and 1
// let numbers2 = [4,2,5,1,3];
// numbers2.sort(function (a,b) {
//     return a>b ? 1 : -1;
// });
// console.log(numbers2);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let result = arr.filter(item => item % 2 === 0)
//     .map(item => item * item)
//     .reduce((sum, item) => sum + item);
// console.log(result);

// let week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// function whatTheDay (a) {
//     return week[a-1];
// }
// console.log(whatTheDay(1));

// arr = [1,2,3,-1,-2,-3];
// function isPositive(a) {
//     if (a>0){
//         return true;
//     } else {
//         return false
//     }
// }
// let result = arr.filter(isPositive);
// console.log(result);

// function getDigitsSum(a) {
//     a = a + '';
//     b = a.split('');
//     return b.map(item => +item)
//         .reduce((sum, item) => sum + item);
// }
// console.log(getDigitsSum(57));

// let years = [];
// for (let i = 1; i <= 2018; i++) {
//     years.push(i);
// }

// let yearsSum = years.filter(function (item) {
//     return getDigitsSum(item) === 13;
// });
// console.log(years);
// console.log(yearsSum);


// let logins = ['ImFirst', 'robotGoogles', 'R2D2', 'admin', 'test', 'user'];
// console.log(logins);
// function addLogin(a) {
//     if (a.length <= 3) {
//         console.log('Не менее 3-х символов');
//         return false;
//     } else if (a.length >=16) {
//         console.log('Не более 16 символов');
//         return false;
//     } else {
//         if ( logins.includes(a) !== true ) {
//             logins.push(a);
//             // console.log('logins true');
//             return true;
//         } else {
//             console.log('Such name already exists');
//             return false;
//         }
//     }
// }
// addLogin('admin');
// console.log(logins);
// addLogin('aaas');
// console.log(logins);


// const clients = ["mary", "ANN", "BoB"];
// let clientsNew = clients.map(function (item) {
//     return item[0].toUpperCase() + item.slice(1).toLowerCase();
// });
// console.log(clientsNew);


// let arr = [1,4,7,9,12,15,18,21,25,27];
// function findGreaterThen(a, b) {
//     return a.filter(function (item) {
//         return item > b;
//     });
// }
// console.log(findGreaterThen(arr, 11));

// function findEvery(mass, num) {
//     return mass.every(function (item) {
//         return item >= num;
//     });
// }
// let arr = [4,5,8,12,15,17,18,22,25,28];
// console.log(findEvery(arr, 3));


function multiplyBy(mass, num) {
    return mass.map(function (item) {
        return item * num;
    });
}
let arr = [4,5,8,12,15,17,18,22,25,28];
console.log(multiplyBy(arr, 3));

