const http = require('http');

const server = http.createServer((req, res, next) => {
    console.log('Hello World');
    res.write(`
        <h1>Hellow World<h1>
    `);
    res.end();
});

server.listen(4000);