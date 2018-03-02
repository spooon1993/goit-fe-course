const menu = {
    title: 'Eat it createElement, templates rule fsdfsdfsdf s',
    subTitle: 'lorem 2 asdawfasd',
    items: ['LoDash', 'Handlebars', 'Pug', 'EJS'],
    libs: ['React','Angular'],
};

// let html = document.querySelector('#menu').textContent.trim();
// console.log(html);
// let compiled = _.template(html);
// console.log(compiled);
// let result = compiled(menu);
// console.log(result);
// let container = document.querySelector('#menu-container');
// container.innerHTML = result;

// let string = '';
// for (let i = 0; i<4; i++) {
//     string += ` <ul> <li> ${menu.items[i]} </li> </ul> `;
// }
// let str = ` <h1>${menu.title}</h1> <h2>${menu.subTitle}</h2> ${string} `;
// let container = document.querySelector('#menu-container');
// container.innerHTML = str;



const articlesItems = [
    {
        title: 'The 1 Percent Rule: Why a Few People Get Most of the Rewards in Life',
        text: 'Sometime in the late 1800s—nobody is quite sure exactly when—a man named Vilfredo Pareto was fussing about in his garden when he made a small but interesting discovery',
        link: 'https://jamesclear.com/the-1-percent-rule'
    },
    {
        title: 'Forget About Setting Goals. Focus on This Instead.',
        text: 'We all have things that we want to achieve in our lives — getting into the better shape, building a successful business, raising a wonderful family, writing a best-selling book, winning a championship, and so on.',
        link: 'https://jamesclear.com/goals-systems'
    },
    {
        title: 'The Paradox of Behavior Change',
        text: 'The natural tendency of life is to find stability. In biology we refer to this process as equilibrium or homeostasis. For example, consider your blood pressure. When it dips too low, your heart rate speeds up and nudges your blood pressure back into a healthy range. When it rises too high, your kidneys reduce the amount of fluid in the body by flushing out urine. All the while, your blood vessels help maintain the balance by contracting or expanding as needed.',
        link: 'https://jamesclear.com/behavior-change-paradox'
    }
];

let str = '';
articlesItems.map(function (item) {
    return str += `<div class="article-item"> <h3>${item.title}</h3> <p>${item.text}</p> <a href="${item.link}" target="_blank">Read more</a> </div>`;
});
// console.log(str);
let container = document.querySelector('#menu-container');
container.innerHTML = str;

