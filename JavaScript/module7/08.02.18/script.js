// let Car = function (speed, power) {
//   return {
//       speed: speed,
//       power: power
//   }
// };
//
// let bmw  = new Car(200, 500);
// let zeper = new Car(10,50);
// console.log(bmw);
// console.log(zeper);

// змінити назву
// let dog5 = {
//   name: 'Jack',
//     age: 2,
//     getAge : function () {
//         console.log(this.age);
//     }
// };
// let dog = {
//     dog: true,
//     name: 'Jack',
//     age: 20,
//     getAge : function () {
//         console.log(this.age);
//     }
// };
// // //
// dog5.getAge();
// dog.getAge();
//
// let dog2 = {
//     name: 'Jack',
//     age: 20,
//     getAge : function () {
//         console.log(this.age);
//     }
// };
//
// dog2.getAge();
//
// let dog = {
//   name: 'Jack',
//     sayName: function () {
//         console.log(`My name is ${this.name}`);
//     }
// };
// let cat = {
//     name: 'Spark',
//     sayName: function () {
//         console.log(`My name is ${this.name}`);
//     }
// };
// //
// dog.sayName();
// cat.sayName();


// call

//  let sayName = function () {
//     console.log(`My name is ${this.name}`);
// };
//
// let dog = {
//   name: 'Jack',
// };
// let cat = {
//     name: 'Spark',
// };
//
// let pig = {
//     name: 'Svinya'
// };
// sayName.call(dog);
// sayName.call(cat);
// sayName.call(pig);

// apply
//
//  let sayName = function (lang1, lang2, lang3) {
//     console.log(`My name is ${this.name} i know ${lang1}, ${lang2}, ${lang3}`);
// };
// let lang = ['HTML', 'CSS', 'JS', 'React'];
// let dog = {
//     name: 'Jack',
// };
// let cat = {
//     name: 'Spark',
// };
//
// sayName.call(dog, lang[0], lang[1], lang[2]);
//
// sayName.apply(cat, lang);



// console.log(Math.max.apply(null,[1, 5, 9, 12, 2, 58, 99]));



// bind
//
// const hotel = {
//     name: `Resort`,
//     hello: function (a) {
//         return `${a}, Wellcome in ${this.name} hotel!`;
//     }
// };
// const casino = {
//     name: `Royal`,
// };
//
// console.log(hotel.hello('Homer'));
//
// const hi = hotel.hello.bind(casino);
//
//
// console.log(hi('Homer'));

// let arr = [];
// let obj = {};
// let arr2 = new Array();
// let obj2 = new Object();

// let Car = function (speed, color) {
//     this.speed = speed;
//     this.color = color;
//     this.drive = function (speed, time) {
//         return speed * time;
//     }
// };

// let Car = function (speed, power) {
//     return {
//         speed: speed,
//         power: power
//     }
// };
//
// let bmw  = new Car(200, 500);
// let zeper = new Car(10,50);
// console.log(bmw);
// console.log(zeper);

// let bmw = {
//     color: "black",
//     speed: 200
// };
//
// let zeper = {
//     speed: 50,
//     color: "blue"
// };
// let bmw = new Car(200, 'black');
// let zeper = new Car(50, 'blue');
//
// console.log(bmw);
// console.log(zeper);
// console.log(bmw.drive(150,3));

// console.log({name: 'jack'});

// (function () {
//     let a = 5;
//     console.log('first iifi', a);
// })();
//
// (function () {
//    let a = 10;
//     console.log('second iifi', a);
// })();
//
// const ua = 'йцукенгшщзхїфівапролджєячсмитьбю';
// const en = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.';
// const ru = 'йцукенгшщзхъфывапролджэячсмитьбю';
//
// const keyboard = {
//     layouts: {
//         en: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ru: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         },
//         ua: {
//             topRow: [],
//             middleRow: [],
//             bottomRow: []
//         }
//     },
//     langs: ['en', 'ru', 'ua'],
//     currentLang: '',
//     createLayout: function (leters, lang) {
//         let firstRow = leters.slice(0,12).split('');
//         let secondRow = leters.slice(12,23).split('');
//         let thirdRow = leters.slice(23).split('');
//         this.layouts[lang].topRow = firstRow;
//         this.layouts[lang].middleRow = secondRow;
//         this.layouts[lang].bottomRow = thirdRow;
//     },
//
//     chouseLang: function () {
//         let chose = prompt('enter en-0, ru-1, ua-2');
//         if (chose === '0') {
//             this.currentLang = 'en';
//         } else if (chose === '1') {
//             this.currentLang = 'ru';
//         } else if (chose === '2') {
//             this.currentLang = 'ua';
//         } else if (chose === null) {
//             return;
//         } else {
//             alert('Error');
//             this.chouseLang();
//         }
//     },
//
//     getRandCharInAlph: function () {
//         let finalResult = [];
//         let alphabet = this.layouts[this.currentLang];
//         for (let key in alphabet) {
//             finalResult = finalResult.concat(alphabet[key]);
//         }
//
//         return finalResult[Math.floor(Math.random()* finalResult.length)];
//
//     }
// };
//
//
// keyboard.createLayout(en,'en');
// keyboard.createLayout(ua,'ua');
// keyboard.createLayout(ru,'ru');
// keyboard.chouseLang();
// console.log(keyboard.currentLang);
// console.log(keyboard.getRandCharInAlph());
//
// const keyTrainer = {};
// keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
// keyTrainer.charCount = '';
// keyTrainer.checkPositiveInteger = function (num) {
//     if (num > 0 && Number.isInteger(num)) {
//         return true;
//     } else {
//         return false
//     }
// };
// keyTrainer.setCharCount = function () {
//   let charAmount = +prompt('Enter amount');
//   if (this.checkPositiveInteger(charAmount)){
//       this.charCount = charAmount;
//   } else {
//       this.setCharCount();
//   }
// };
// keyTrainer.task = [];
// keyTrainer.createTask = function () {
//   for ( let i = 0; i < this.charCount; i ++) {
//       let randomIndex = Math.floor(Math.random()*this.chars.length);
//       let randomLetter = this.chars[randomIndex];
//       this.task.push(randomLetter);
//   }
// };
// keyTrainer.userErrors = 0;
// keyTrainer.startTask = function () {
//   let string = this.task.join('');
//   this.userInput = prompt(`Enter this string ${string}`).split('');
//     console.log(string);
// };
//
// keyTrainer.checkErrors = function () {
//   for (let i = 0; i < this.userInput.length; i++) {
//       if (this.userInput[i] === this.task[i]){
//           continue;
//       } else {
//           this.userErrors++
//       }
//   }
//   alert(`You make ${this.userErrors} mistakes`)
// };
//
// keyTrainer.run = function () {
//   this.setCharCount();
//   this.createTask();
//   this.startTask();
//   this.checkErrors();
// };
//
// keyTrainer.run();
// console.log(keyTrainer);
//



//
//
// let str = '';
//
// let arr = [
//     {
//         title: 'Tes1',
//         quest1: '1254ddf',
//         quest2: 'qwerty'
//     },{
//         title: 'Tes1',
//         quest1: '1254ddf',
//         quest2: 'qwerty'
//     },{
//         title: 'Tes1',
//         quest1: '1254ddf',
//         quest2: 'qwerty'
//     }
// ];
// arr.map(function (item, i) {
//     for (let key in item) {
//         str += `<input type="text" value="${item[key]}" class='${i+1}'>`
//     }
//     return str;
// });
// let test = {
//     title: 'Tes1',
//     quest1: '1254ddf',
//     quest2: 'qwerty'
// };
//
//

// let container = document.querySelector('.box');
// let containers = document.querySelectorAll('div');
// console.log(container);
// let html = container.innerHTML;
// console.log(html);//
// console.log(containers);
// console.log(Array.from(containers));


// let title = document.querySelector('.article-title');
// let text = title.textContent;
// console.log(text);

// let container = document.querySelector('.box');
//
// container.innerHTML = str;
//
// const selectedById = document.querySelector('#menu');
// const menuItemsByTagName = document.querySelectorAll("li");
// const itemsByClassName = document.getElementsByClassName("menu-item");
//
// // value
// const message = document.querySelector("#message");
// console.log(message.value);
//
// // innerHTML и textContent
//
// const article = document.querySelector(".article");
//
// console.log(article.innerHTML); // все содержимое article, вместе с тегами
// console.log(article.textContent); // только текстовый контент внутри article
//
// // classList

// let container = document.querySelector('.box');
// let classes = container.classList.remove('red');
// // console.log(classes);
// console.log(container.classList);
// container.classList.add('blue', 'black');
// console.log(container.classList);
// const elem = document.querySelector("#paragraph");
//
// console.log(elem.classList); // ["text", "red", "big", value: "text red big"]
//
// console.log(elem.classList.contains("red")); // true
//
// elem.classList.remove("big");
// console.log(elem.classList); // ["text", "red", value: "text red"]
//
// elem.classList.add("new-class");
// console.log(elem.classList); // ["text", "red", "new-class", value: "text red new-class"]
//
// // можно добавлять множественные классы
// elem.classList.add("a", "b", "c");
// console.log(elem.classList);
//
// elem.classList.toggle("hidden"); // спрячется, добавился класс hidden
// elem.classList.toggle("hidden"); // покажется, удалили класс hidden
//
// let picture = document.querySelector('.picture');
// console.log(picture.setAttribute('alt', 'big picture'));
// const image = document.querySelector(".image");
//
// console.log(image.attributes); // обьект всех аттрибутов елемента
// // NamedNodeMap {0: class, 1: src, 2: alt, length: 3}
//
// console.log(image.hasAttribute("src")); // true
//
// console.log(image.getAttribute("alt")); // nature image
//
// image.setAttribute("alt", "amazing nature image");
//
// console.log(image.getAttribute("alt")); // amazing nature image
//
//
// // create
//
// let par = document.querySelector('p');
// const heading = document.createElement('h1');
// // console.log(heading); // <h1></h1>
// heading.textContent = 'Ракета кльопана';
// heading.classList.add('title');
// console.log(heading);
// let container = document.querySelector('.box');
// container.insertBefore(heading,par);

// heading.textContent = 'This is a heading';
// console.log(heading); // <h1>This is a heading</h1>
//
//
// const image = document.createElement('img');
// image.setAttribute('alt', 'this is an image');
// console.log(image); // <img alt="this is an image">
//
//
//
// // add
// const nav = document.querySelector(".nav");
// nav.appendChild(item);
//
// const container = document.querySelector(".container");
// container.insertBefore(heading, nav);
//
// // new add
//
// list.append(item); // в конце list
// list.prepend(clone); // в начале list
// list.before(title); // перед list
// list.after(text); // после list
//
//
// node.remove(); // delete
//
//
// // innerHtml
//
// // const article = document.querySelector('.article');
// // const text = '<p class="article-text">Some random text</p>';
// // article.innerHTML += text;
//
//
// // insertAdjacentHTML
//
// element.insertAdjacentHTML(position, text);
// const list = document.querySelector('#list');
//
// list.insertAdjacentHTML('beforebegin', '<h2>beforebegin заголовок</h2>');
// list.insertAdjacentHTML('afterbegin', '<li>afterbegin item</li>');
// list.insertAdjacentHTML('beforeend', '<li>beforeend item</li>');
// list.insertAdjacentHTML('afterend', '<p>afterend текст</p>');
//
//
//
//
//
//
//
// const parent = document.querySelector('.box2');
// const frag = document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//     const el = document.createElement('div');
//     el.textContent = `div #${i}`;
//     frag.appendChild(el);
// }
//
// parent.appendChild(frag);

// const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
// ];
let students = ["Саша","Люда", "Артем","Юра печенька", "Руслан","Діма","Женя","Максим", "Юра"]
console.log(Math.floor(Math.random() * students.length)+1);
//
// let title = document.createElement("h1");
// title.textContent = ":fire: This Gallery Is Lit :fire:";
//
// let galleryContainer = document.querySelector(".gallery");
// console.log(title);
// console.log(galleryContainer);
// galleryContainer.prepend(title);
//
// let gallery = document.createElement('div');
// gallery.classList.add('gallery-grid');
// galleryContainer.append(gallery);

// let picConteiner = document.createElement("div");
// gallery.append(picConteiner);
//
// let img = document.createElement("img");
// img.setAttribute("src","https://source.unsplash.com/PC_lbSSxCZE/800x600");
// img.setAttribute("alt","Picture");
// picConteiner.append(img);
//
// let image = document.createElement('div');
// gallery.append(image);
// let image2 = document.createElement('img');
// image2.setAttribute('src', imgUrls[1] );
// image2.setAttribute('alt', 'Picture');
// image.append(image2);
//
//
// let img3 = document.createElement("div");
// let image3 = document.createElement("img");
// gallery.append(img3);
// image3.setAttribute("src",imgUrls[2] );
// image3.setAttribute("alt", "Picture");
// img3.append(image3);
//
// let newGallery = imgUrls.map(function (item) {
//     let newDiv = document.createElement("div");
//     gallery.append(newDiv);
//     let newImg = document.createElement("img");
//     newImg.setAttribute("src",item);
//     newImg.setAttribute("alt","newPicture");
//     newDiv.append(newImg);
//
// });
// let frag = document.createDocumentFragment();
// for (let i = 0; i < imgUrls.length; i++){
//     let newDiv = document.createElement('div');
//     frag.append(newDiv);
//     let newImg = document.createElement('img');
//     newImg.setAttribute('src', imgUrls[i]);
//     newImg.setAttribute('alt', 'Picture');
//     newDiv.append(newImg);
// }
// gallery.append(frag);

const frankiInfo = {
    content: "Swing dancer extraordinaire Frankie Manning was a leading dancer at Harlem's legendary Savoy Ballroom where, in the mid-1930s, he revolutionized the course of the lindy hop with his innovations, including the lindy air step and synchronized ensemble lindy routine. As a featured dancer and chief choreographer for the spectacular Whitey's Lindy Hoppers, he performed in numerous films (including Hellzapoppin'), and entertained on stages around the world with jazz greats Ethel Waters, Count Basie, Duke Ellington, Ella Fitzgerald, and Cab Calloway. Upon the demise of the Swing Era, Frankie took a job in the Post Office, where he worked for thirty years until his rediscovery by a new generation of swing dance enthusiasts in the mid-1980s. From then on he was in constant demand and motion, teaching, choreographing, and performing globally. He won a 1989 Tony Award for his choreography in Black and Blue, and served as a consultant for and performed in Spike Lee's Malcolm X. Frankie's activities have been chronicled in hundreds of articles (including features in GQ and People) and dozens of news programs (including a profile on ABC's 20/20). Frankie passed away in 2009, but his memory and legacy are being carried on by swing dancers around the world.",
    frankieTimeline: {
        "1914" : "Born on May 26 in Jacksonville, Florida."
        ,"1926" : "Savoy Ballroom opens at Lenox Avenue and 140th Street in Harlem."
        ,"1933" : "First ventures to Savoy Ballroom."
        ,"1934" : "Invited by Herbert \"Whitey\" White to join elite group of Savoy Lindy hoppers."
        ,"1935" : ["Introduces the first Lindy air step, over-the-back.", "Introduces \"stops\" and synchronized ensemble lindy routines."]
        ,"1936" : "Whyte's Hopping Maniacs appear in downtown reopening of the Cotton Club."
        ,"1937" : "Whitey's Lindy Hoppers appear in A Day at the Races (uncredited)."
        ,"1938" : "Whitey's Hopping Maniacs appear in Radio City Revels (uncredited)."
        ,"1939" : "Arthur White's Lindy Hoppers appear in Keep Punching."
        ,"1941" : "Congeroo Dancers appear in Hellzapoppin'."
        ,"1942" : "Whitey's Lindy Hoppers appear in Hot Chocolate (\"Cottontail\") with Duke Ellington."
        ,"1943" : "Inducted into Army. Serves in New Guinea, the Philippines, and Japan."
        ,"1947" : "FM's new group, the Congaroo Dancers, debuts at Roxy Theatre."
        ,"1948" : "Four Congaroos appear in Killer Diller."
        ,"1955" : ["Disbands the Congaroo Dancers.", "Goes to work for the U.S. Postal Service."]
        ,"1958" : "Savoy Ballroom closes."
        ,"1986" : "Begins teaching career by agreeing to work with Erin Stevens and Steven Mitchell."
        ,"1987" : "Retires from the post office."
        ,"1989" : "Wins Tony Award for Best Choreography for Black and Blue with Cholly Atkins, Henry{ LeTang, and Fayard Nicholas."
        ,"1992" : ["Serves as consultant/performer in Spike Lee's film Malcolm X.", "Serves as assistant choreographer/performer with Norma Miller in Debbie Allen's\" Stompin' at the Savoy."]
        ,"1994" : "Receives NEA Choreographers' Fellowship."
        ,"1999" : "Performs in PBS special, Swinging' with Duke, featuring the Lincoln CenterJazz Orchestra with Wynton Marsalis."
        ,"2000" : "Receives NEA National Heritage Fellowship."
        ,"2001" : "Appears in Ken Burns's documentary, Jazz."
        ,"2007" : "Frankie Manning: Ambassador of Lindy Hop is published."
        ,"2009" : "Frankie Manning passes away."
    },
    img: 'http://www.frankiemanning.com/photos/frankie-full.jpg',
    title: 'Frankie Manning',
    subTitle: 'the ambassador of swing',
    timeLine: 'Timeline',
};
// select app
let newDiv = document.querySelector('#app');
// create elements
let newContant = document.createElement('div');
let newTitle = document.createElement('h1');
let newTitle2 = document.createElement("h2");
let newImg = document.createElement("img");
let newSection = document.createElement('section');
let newArticle = document.createElement('article');
let newP = document.createElement('p');
let newTitle3 = document.createElement("h2");
let newUl = document.createElement('ul');

let DocFrag=document.createDocumentFragment();
for(let key in frankiInfo.frankieTimeline){
    let newLi = document.createElement('li');
    newLi.textContent = `${key} ${frankiInfo.frankieTimeline[key]}`;
    DocFrag.append(newLi);
}



// add classes and atr
newContant.classList.add('content');
newTitle.setAttribute('id', 'Title');
newTitle2.setAttribute("id",'Subhead');
newImg.setAttribute('id','headerImage');
newImg.setAttribute('src', frankiInfo.img);
newTitle3.setAttribute("id","Timeline");





// add text
newTitle.textContent = frankiInfo.title;
newTitle2.textContent = frankiInfo.subTitle;
newP.textContent = frankiInfo.content;
newTitle3.textContent = frankiInfo.timeLine;


// paste elements
newDiv.append(newContant);
newContant.append(newTitle);
newContant.append(newTitle2);
newContant.append(newImg);
newSection.append(newArticle);
newContant.append(newSection);
newArticle.append(newP);
newContant.append(newTitle3);
newUl.append(DocFrag);
newContant.append(newUl);








