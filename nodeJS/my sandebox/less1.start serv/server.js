const http = require("http");
const port = 3000;
const  server = new http.Server();
let i = 0;
server.on('request', (req, res) => {
    i += 1;
    res.end('Hello' + i.toString());
});

server.listen(port);

//work:
// const server = http.createServer((req, res) => {
//     res.end("Hello, world.");
// });
//
// server.listen(port, () => {
//     console.log("Server listening on: http://localhost:%s", port);
// });


// experimental
// const server = http.createServer();
// let  i = 0;
// server.on('request', (req, res) => {
//     i += 1;
//     res.end(i.toString);
// });
//
// server.listen(port);

// const server = new http.Server(port, (req, res) => {
//     res.end('hello world');
// });
//
// server.on();
//
// server.listen(port);
//
// server.on("request", (req, res) => {
//     console.log("server run");
// });
//
// server.listen(port);

//work:
// let i = 0;
// const server = http.createServer((req, res) => {
//     i += 1;
//     res.end(`${i}`);
// });
//
// server.listen(port, () => {
//     console.log('Server listening on: http://localhost:%s', port);
// });


// new try to work
// let i = 0;
// const server = http.createServer((req, res) => {
//     i += 1;
//     res.end(`${i}`);
// });
//
// server.listen(port);