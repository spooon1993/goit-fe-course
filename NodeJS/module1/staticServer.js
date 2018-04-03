const http = require('http');
const PORT = 8000;
const fs = require('fs');
const template = require('./template.js');
const word = 'word1';



const urlMap = {
    '/users/': () => { return 'users'},
    '/posts/': () => { return 'posts'},
    '/hello/': () => { return fs.readFileSync('./index.html') },
    '/words/': () => { return template([word, word, word]) },
    '/getinfo/': () => {return '123'},
};





http.createServer((request, response) => {
    let index = request.url.indexOf('?');
    let Query = request.url.slice(index +1).split('&').reduce((acc, query) => {
        let queryArr = query.split('=');
        acc[queryArr[0]] = queryArr[1];
        return acc
    },{});

    if(request.url in urlMap){
        response.write( urlMap[request.url]() );

    } else {
        response.write('404 page not found \n');
    }
    response.end();
}).listen(PORT);
