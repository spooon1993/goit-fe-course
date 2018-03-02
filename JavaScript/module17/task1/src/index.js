import notify from './js/notification.js';
import './css/main.scss';

// import {add, minus, mylt} from "./js/math";
import * as calculator from './js/math';

// console.log(add(5, 4));
// console.log(mylt(3, 7));
// console.log(minus(10, 4));
// notify('Jack');

console.log(calculator);
console.log(calculator.add(10, 20));

import moment from 'moment';

console.log('moment', moment());


import menuTemplate from './templates/menu.html';
import _ from 'lodash';

import cat from './img/cat.jpg';

const image = document.getElementById('cat');
image.setAttribute('src', cat);

// console.log(menuTemplate);
// notify('mango');

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }
//
// const dog = new Dog('Mango');
//
// console.log('qweqweqwe');


const menuData = {
  title: 'Menu title',
  items: ['Webpack', 'Wiz', 'ESNext', 'Fiber']
};


const compiled = _.template(menuTemplate);



document.getElementById('root').innerHTML =compiled(menuData);
