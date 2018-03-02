const currentLink = 'http://localhost:3000/users/';
function getUsers() {
    fetch(currentLink)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })
}
getUsers();

let regName = /^[a-zA-Z]{2,}$/;
let regScore = /^\d+$/;
let name = document.querySelector('#name');
let score = document.querySelector('#score');
let btn = document.querySelector('#btn');
btn.addEventListener('click', validate);
let idUser = document.querySelector('#idUser');
let getBtn = document.querySelector('#get-btn');
getBtn.addEventListener('click', getUsers);
let delBtn = document.querySelector('#del-btn');
delBtn.addEventListener('click', function () {
    dellUser(idUser.value);
});

function validate() {
    event.preventDefault();
    if ( regName.test(name.value) && regScore.test(score.value) ) {
        console.log('all validate');
        let obj = {};
        obj.name = name.value;
        obj.score = score.value;
        console.log(obj);
        addUser(currentLink, obj);
    } else if ( ( regName.test(name.value) && regScore.test(score.value) ) === false ) {
        console.log('failed');
    }else if ( regName.test(name.value) === false ) {
        console.log('name invalid');
    } else if ( regScore.test(score.value) === false ) {
        console.log('score invalid');
    }
    // console.log(regName.test(name.value));
    // console.log(regScore.test(score.value));
}

function addUser(link, data) {
    fetch(link, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( data )
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
        })
}

function dellUser(id) {
    fetch(currentLink+`${id}`, {
        method: 'DELETE'
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            console.log('deleted');
        })
}


// let obj = {
//     name: '1231231',
//     score: '12123',
// };

// addUser(currentLink, obj);