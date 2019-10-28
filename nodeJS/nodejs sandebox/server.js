http = require('http');

const server = new http.Server();

server.on('request', (req, res) => {
    res.end('HELLO');
});

server.listen(3000, () => console.log('server run'));
