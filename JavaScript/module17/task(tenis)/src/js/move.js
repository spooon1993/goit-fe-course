let rightMove = false; // переменны хранят информацию о нажатии левой или правой кнопки , то что мы их не используем
let leftMove = false; //

// функцыии  условий для задания событий движения блока
function keyDownHandler(key) { // функция которая при зажатии определенных клавиш (кейкод которых мы прописали) будет выполнять действие которое мы зададим
    if(key.keyCode == 39 || key.keyCode == 68) { // keyCode это свойство события keyPress
        rightMove = true;
    }
    else if(key.keyCode == 37 || key.keyCode == 65) {
        leftMove = true;
    }
}
function keyUpHandler(key) { // функция которая при отжатии тех же клавиш прекращает действие тех же клавиш
    if(key.keyCode == 39 || key.keyCode == 68) {
        rightMove = false;
    }
    else if(key.keyCode == 37 || key.keyCode == 65) {
        leftMove = false;
    }
};

export {keyDownHandler, keyUpHandler, leftMove, rightMove};