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

const ua = 'йцукенгшщзхїфівапролджєячсмитьбю';
const en = 'qwertyuiop[]asdfghjkl;\'zxcvbnm,.';
const ru = 'йцукенгшщзхъфывапролджэячсмитьбю';
const keyboard = {
    layouts: {
        en: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ru: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        },
        ua: {
            topRow: [],
            middleRow: [],
            bottomRow: []
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: '',
    createLayout: function (leters, lang) {
        let topRow = leters.slice(0,12).split('');
        let middleRow = leters.slice(12,23).split('');
        let bottomRow = leters.slice(23).split('');
        keyboard.layouts[lang].topRow = topRow;
        keyboard.layouts[lang].middleRow = middleRow;
        keyboard.layouts[lang].bottomRow = bottomRow;
        console.log(topRow);
    }
};
keyboard.createLayout(en, 'en');
console.log('1 ',keyboard.layouts.en.topRow);
console.log('2 ',keyboard.layouts.en.middleRow);
console.log('3 ',keyboard.layouts.en.bottomRow);

