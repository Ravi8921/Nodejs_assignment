
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Your name: [Ravi kant]');
    console.log('Ravi kant');  m
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
