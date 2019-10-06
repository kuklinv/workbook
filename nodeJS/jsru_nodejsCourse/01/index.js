const http = require('http');
const handler = require('./handler.js');

/*
*   1. Core modules
*   2. node_modules
*   3. NODE_PATH=.
* */

const server = new http.Server();

server.on('request', handler);

server.listen(3000);
