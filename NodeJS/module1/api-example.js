// 1. подключение к БД
//     - настроить модель
// 2. поднять сервер через http
// 3. настроить роуты

const db = require('./db.js');
const http = require('http');
const Vegetables = require('./vegetables.js');
const PORT = 8000;
const querystring = require('querystring');
const getData = (request) => {
    return new Promise((resolve, reject) => {
        let data = '';
        request.on("data", (chunk) => {
            data += chunk;
        })
        request.on("end", () => {
            resolve(data);
        })
    });
}

http.createServer((request, response) => {
    if(request.url === '/vegetables/' && request.method === 'POST'){

        getData(request).then((data) => {
            const parsed = querystring.parse(data);
            Vegetables.create(parsed)
                .then((vegetable) => {
                response.end(JSON.stringify(vegetable._doc))
                })
                .catch((e) => {
                console.log(e)
                })
            // response.end('/vegetables/ - POST')
        })

    } else if (request.url === '/vegetables/' && request.method === 'GET'){

        Vegetables.find({})
            .then((info) => {
                response.end(JSON.stringify(info._doc))
            })
            .catch((e) => {
                console.log(e);
            })

        response.end('/vegetables/ - GET')

    } else if (request.url === '/vegetables/' && request.method === 'PUT'){

        response.end('/vegetables/ - PUT')

    } else if (request.url === '/vegetables/' && request.method === 'DELETE'){

        response.end('/vegetables/ - DELETE')

    } else {
        response.end('404 not found');
    }

}).listen(PORT);
