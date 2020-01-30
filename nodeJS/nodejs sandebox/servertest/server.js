    const http = require('http');

const server = new http.Server();

server.on('request', async (req, res) => {
    if (req.method === 'GET') {
        res.end('HELLO GET');
    } else if (req.method === 'POST') {    // будем возвращать тело запроса
        const body = [];
        for await (const chunk of req) {   // новый метод позволяет итерироваться по req (имеет итератор)
            body.push(chunk);              // await нужен потому что сразу весь req не доступен и мы должны дождаться всех чанков это и дает await
        }
        res.end(Buffer.concat(body));
    } else {
        res.end('unknown method');
    }
});

module.exports = server;
