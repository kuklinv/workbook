const http = require("http");
const handler = require("./handler.js");
const port = 3000;

const server = new http.Server();

server.on('request', handler);

server.listen(port);