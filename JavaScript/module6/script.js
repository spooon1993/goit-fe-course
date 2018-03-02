// console.log(this);

// let Car = function (speed, color) {
//   this.speed = speed;
//   this.color = color;
//   this.drive = function (speed, time) {
//       return this.speed * time;
//   }
// };
// let bmw = new Car(200, 'black');
// let zaper = new Car(50, 'blue');
// console.log(bmw);
// console.log(zaper);
// console.log(bmw.drive(150, 3));

// const ua = 'йцукенгшщзхїфівапролджєячсмитьбю';
// const en = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.';
// const ru = 'йцукенгшщзхъфывапролджэячсмитьбю';
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
//         let topRow = leters.slice(0,12).split('');
//         let middleRow = leters.slice(12,23).split('');
//         let bottomRow = leters.slice(23).split('');
//         this.layouts[lang].topRow = topRow;
//         this.layouts[lang].middleRow = middleRow;
//         this.layouts[lang].bottomRow = bottomRow;
//     },
//     chouseLang: function () {
//         let chose = prompt('enter lang en-0, ru-1, ua-2');
//         if ( chose === '0' ) {
//             this.currentLang = 'en';
//         } else if ( chose === '1' ) {
//             this.currentLang = 'ru';
//         } else if ( chose === '2' ) {
//             this.currentLang = 'ua';
//         } else if ( chose === null ) {
//             return
//         } else {
//             alert('enter false, try again');
//             this.chouseLang();
//         }
//     },
//     getRandCharInAlph: function (lang) {
//         let alphabet = this.layouts[this.currentLang];
//         let finalResult = [];
//         for ( let key in alphabet ) {
//             finalResult = finalResult.concat(alphabet[key]);
//         }
//         return finalResult[Math.floor(Math.random()*finalResult.length)];
//     }
// };
// keyboard.createLayout(en, 'en');
// keyboard.createLayout(ru, 'ru');
// keyboard.createLayout(ua, 'ua');
// keyboard.chouseLang();
// console.log(keyboard.currentLang);
// console.log(keyboard.getRandCharInAlph());

// const keyTrainer = {};
// keyTrainer.chars = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
// keyTrainer.charCount = '';
// keyTrainer.checkPositiveInteger = function (num) {
//     if ( num > 0 && Number.isInteger(num) ) {
//         return true;
//     } else {
//         return false;
//     }
// };
// keyTrainer.setCharCount = function () {
//     let charsAmount = +prompt('enter amount');
//     if ( this.checkPositiveInteger(charsAmount) ) {
//         this.charCount = charsAmount;
//     } else {
//         this.setCharCount();
//     }
// };
// keyTrainer.task = '';
// keyTrainer.createTask = function (a) {
//     let arr1 = [];
//     for ( let i = 0; i<a; i++ ) {
//         arr1.push(this.chars[i]);
//     }
//     this.task = arr1;
// };
//
// keyTrainer.setCharCount();
// console.log(keyTrainer.charCount);
// keyTrainer.createTask(keyTrainer.charCount);
// console.log(keyTrainer.task);





// TASK 2


// let inputText = prompt('enter word');

function rot13(text) {
    let word =  text.split('');
    console.log(word);
    let word2 = word.map(function (item) {
        return item.charCodeAt();
    });
    console.log(word2);
    let word3 = word2.map(function (item) {
        if ( item >= 65 && item <= 77 ) {
            return item + 13;
        }   else if ( item >= 78 && item <= 90 ) {
            return item - 13;
        } else {
            return item;
        }
    });
    console.log(word3);
    let word4 = word3.map(function (item) {
        return String.fromCharCode(item);
    });
    console.log(word4);
    let word5 = word4.join('');
    console.log(word5);
}

rot13('SERR CVMMN!"');

//
// function rot131(str) {
//     return str.replace(/([A-M])|([N-Z])/g, function(m, p1, p2) {
//         return String.fromCharCode(m.charCodeAt(0) + (p1 ? 13 : -13));
//     });
// }
// console.log(rot131("FREE PIZZA!"));
// console.log(rot131("SERR CVMMN!"));

