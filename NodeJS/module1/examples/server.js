const http = require('http');
const PORT = 7000;


const server = http.createServer( (request, response) => {
    if(request.url === '/hello/' && request.method === 'GET'){
        response.write('Hello  world!');
    } else {
        response.write('Fuck off!');
    }
    response.end();

    // debugger

} )

server.listen( PORT, () => {
    console.log(`Server started on port: ${PORT}`);
} )
