const jsdom = require('jsdom');
const {JSDOM} = jsdom;
const https = require('https');

const getHTML = (link) => {
    return new Promise((resolve, reject) => {
        let raw = '';
        https.get(link, (res) => {
            res.on('data', (chunk) => {
                raw += chunk;
            });
            res.on("end", () => {
                resolve(raw);
            })
        })
    });
};

const parseWord = (link, words) => {
    let result = {};
    getHTML(link)
        .then((data) => {
            const dom = new JSDOM(data).window.document;
            let textContent = dom.querySelector('.f-vacancy-inner-wrapper').textContent.split(' ');
            words.map((word) => {
                result[word] = textContent.includes(word)
            });
            console.log(result);
            return result;
        });

};

module.exports = parseWord;
parseWord('https://rabota.ua/ua/company5209337/vacancy6793918', ['Опубліковано', 'кодом', 'реєстрації']);

let res1 = parseWord('https://rabota.ua/ua/company5209337/vacancy6793918', ['Опубліковано', 'кодом', 'реєстрації']);
console.log('res1',res1);
debugger
