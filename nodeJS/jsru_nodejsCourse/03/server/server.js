const http = require('http');

const server = new http.Server();

server.on('request', async (req, res) => {
  if (req.method === 'GET') {
    res.end('hello');
  } else if (req.method === 'POST') {
    const body = [];
    for await (const chunk of req) {
      body.push(chunk);
    }
    res.end(Buffer.concat(body));
  } else {
    res.end('unknown method');
  }
});

module.exports = server;
