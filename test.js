const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

var fs = require( 'fs' );

var a = 1;

fs.writeFile('dane.txt', a + 1 , (err) => {
    if (err) throw err;
console.log('Test2');
});