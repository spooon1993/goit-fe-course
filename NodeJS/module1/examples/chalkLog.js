const chalk = require('chalk');
const {logIn} = require('./testLogWinston');

const taskChalk = () => {
    let random = function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    let colorText = ['синий', 'красный', 'зеленый', 'желтый'];
    let red = random(0,255);
    let green = random(0,255);
    let blue = random(0,255);
    let text = random(0, colorText.length -1);

    let result = chalk.rgb(red, green, blue)(colorText[text]);
    console.log(result);
    let res = `${colorText[text]} color: rgb( ${red}, ${green}, ${blue} )`;
    logIn(res);
};

setInterval( () => { taskChalk() }, 1000);
