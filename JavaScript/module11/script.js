//objects

let input = document.createElement('input');
let btn = document.createElement('a');
let cloud = document.createElement('i');
let gallery = document.createElement('div');
let frag = document.createDocumentFragment();

//
let container = document.querySelector('.container');
let video = document.querySelector('#video');
let picture = document.querySelector('#picture');

//add classes
btn.classList.add('waves-effect', 'waves-light', 'btn');
btn.textContent = 'BUTTON';
cloud.classList.add('material-icons', 'left');
cloud.textContent = 'cloud';
gallery.classList.add('gallery');

//put in
container.append(input);
container.append(btn);
btn.append(cloud);
container.append(gallery);

//modal setting
$('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        inDuration: 300, // Transition in duration
        outDuration: 200, // Transition out duration
        startingTop: '4%', // Starting top style attribute
        endingTop: '10%', // Ending top style attribute
        ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
            // alert("Ready");
            // console.log(modal, trigger);
        },
        complete: function() {
            // alert('Closed');
        } // Callback for Modal close
    }
);

// request
const endPoint = 'https://pixabay.com/api/?key=';
const endPointVideo = 'https://pixabay.com/api/videos/?key=';
const apiKey = '7987019-c95f77ae0e056f0aeb10bfaff';
const question = function () {
    return input.value;
};
// function request(quest) {
//     fetch(endPoint+apiKey+`&q=${quest}&per_page=50`)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             let string = '';
//             for ( let i = 0; i < data.hits.length; i++ ) {
//                 string += `<img class="gallery__item" src="${data.hits[i].webformatURL}" >`
//                 }
//                 gallery.innerHTML = string;
//         })
// }
btn.addEventListener('click', function () {
    request(question());
});

video.addEventListener('click', function () {
    requestVideo(question(), endPointVideo);
});
picture.addEventListener('click', function () {
    request(question(), endPoint);
});

function request(quest, point) {
    fetch(point+apiKey+`&q=${quest}&per_page=50`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let string = '';
            for ( let i = 0; i < data.hits.length; i++ ) {
                string += `<img class="gallery__item" src="${data.hits[i].webformatURL}" >`
            }
            gallery.innerHTML = string;
        })
}
function requestVideo(quest, point) {
    fetch(point+apiKey+`&q=${quest}&per_page=10`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let string = '';
            for ( let i = 0; i < data.hits.length; i++ ) {
                string += `<video class="gallery__item" src="${data.hits[i].videos.tiny.url}" autoplay ></video>`
            }
            gallery.innerHTML = string;
        })
}




// fetch(endPoint+apiKey+'&category=nature&order=popular&per_page=50')
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (data) {
//         console.log('data ',data);

        // let img = document.createElement('img');
        // img.setAttribute('src',data.hits[0].webformatURL);
        // frag.append(img);
        // gallery.append(frag);
        // let string = '';
        // for ( let i = 0; i < data.hits.length; i++ ) {
            // let img = document.createElement('img');
            // img.classList.add('gallery__item');
            // img.setAttribute('src', data.hits[i].webformatURL);
            // gallery.append(img);

            // string += `<img class="gallery__item" src="${data.hits[i].webformatURL}" >`
        // }
        // console.log(string);
        // gallery.innerHTML = string;
    // });


