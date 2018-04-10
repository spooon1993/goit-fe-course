const http = require('http');
const PORT = 8000;
const fs = require('fs');
const template = require('./template.js');
const word = 'word1';
const parseWord = require('./parseWords.js');

const urlMap = {
    '/users/': () => { return 'users'},
    '/posts/': () => { return 'posts'},
    '/hello/': () => { return fs.readFileSync('./index.html') },
    '/words/': () => { return template([word, word, word]) },
    '/getinfo/': (param, req, res) => {
        return new Promise((resolve, reject) => {
            parseWord(param.article, param.words)
                .then((data) => {
                    return resolve(data)
                })
        } )
    },
};

http.createServer((request, response) => {
    let index = request.url.indexOf('?');
    let url = request.url.slice(0, index);
    let Query = request.url.slice(index +1).split('&').reduce((acc, query) => {
        let queryArr = query.split('=');
        acc[queryArr[0]] = queryArr[1];
        return acc
    },{});

    if(url in urlMap){
        urlMap[url](Query, request, response)
            .then( (data) => {
                response.write(JSON.stringify( data ) );
                response.end();
            } )

    } else {
        response.write('404 page not found \n');
        response.end();
    }

}).listen(PORT);
