// let container = document.querySelector('div');
// let containers = document.querySelectorAll('div');
// console.log(container);
// console.log(containers);
// console.log(Array.from(containers));
// let html = container.innerHTML;
// console.log(html);
// let h2 = document.querySelector('.title');
// console.log(h2.innerHTML);
// console.log(h2.textContent);

// let container = document.querySelector('.box');
// console.log(container.classList);
// // let clases = container.classList;
// let clases = container.classList.remove('red');
// console.log(clases);
// console.log(container.classList);
// container.classList.add('blue', 'black');
// console.log(container.classList);

// let pict = document.querySelector('.picture');
// console.log(pict);
// console.log(pict.hasAttribute('alt'));
// console.log(pict.getAttribute('alt'));
// console.log(pict.setAttribute('alt','big picture'));
// console.log(pict.getAttribute('alt'));
// console.log(pict.removeAttribute('alt'));

// const heading = document.createElement('h1');
// heading.textContent = 'Ракета клепаная';
// heading.classList.add('title');
// console.log(heading);
// let container = document.querySelector('.box');
// container.appendChild(heading);
// let par = document.querySelector('.article-text');
// container.insertBefore(heading, par);

// list.append(item); //в конце list
// list.prepend(item); //в начале list
// list.before(item); //перед list
// list.after(item); //после list


const imgUrls = ['https://source.unsplash.com/PC_lbSSxCZE/800x600','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600','https://source.unsplash.com/GtYFwFrFbMA/800x600','https://source.unsplash.com/Igct8iZucFI/800x600','https://source.unsplash.com/M01DfkOqz7I/800x600','https://source.unsplash.com/MoI_cHNcSK8/800x600','https://source.unsplash.com/M0WbGFRTXqU/800x600','https://source.unsplash.com/s48nn4NtlZ4/800x600','https://source.unsplash.com/E4944K_4SvI/800x600','https://source.unsplash.com/F5Dxy9i8bxc/800x600','https://source.unsplash.com/iPum7Ket2jo/800x600'
];

let title = document.createElement('h1');
title.textContent = ':fire: This Gallery Is Lit :fire:';
let gallery = document.querySelector('.gallery');
gallery.append(title);

let box = document.createElement('div');
box.classList.add('gallery-grid');
gallery.append(box);

let box2 = document.querySelector('.gallery-grid');
// let divBox = document.createElement('div');
// box2.append(divBox);
// let pict = document.createElement('img');
// pict.setAttribute('src',imgUrls[0]);
// divBox.append(pict);

let frag = document.createDocumentFragment();
for ( let i = 0; i < imgUrls.length; i++ ) {
    let divBox = document.createElement('div');
    let pict = document.createElement('img');
    pict.setAttribute('src',imgUrls[i]);
    divBox.append(pict);
    frag.append(divBox);
}
console.log(frag);
box2.append(frag);

