const http = require('http');

const server = new http.Server();

function synchandler() {
  const now = Date.now();
  while(true) {
    if (Date.now() - now > 5000) return;
  }
}

function asynchandler(res) {
  setTimeout(() => {
    res.end('hello world');
  }, 5000);
}
//   5s    10s
// macro tasks queue: [req1, req2]
server.on('request', (req, res) => {
  synchandler();
  res.end('hello world');
  // asynchandler(res);
});

server.listen(3000);
