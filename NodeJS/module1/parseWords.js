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

const parseWord = (link, words = ['html', 'css', 'js']) => {
    return getHTML(link)
        .then((data) => {
            let result = {};
            const dom = new JSDOM(data).window.document;
            let textContent = dom.body.textContent;
            words.map((word) => {
                result[word] = textContent.includes(word)
            });
            console.log(result);
            return Promise.resolve(result);
        });
};

module.exports = parseWord;
// parseWord('https://rabota.ua/ua/company5209337/vacancy6793918', ['Опубліковано', 'кодом', 'реєстрації']);
// parseWord('https://www.work.ua/jobs/3121880/', ['Опубліковано', 'кодом', 'реєстрації']);
// parseWord('https://www.work.ua/jobs/3121880/');

