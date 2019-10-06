// const http = require('http');
// const handler = require('./handler');
import http from 'http';
import handler from './handler.mjs';

/*
*   1. Core modules
*   2. node_modules
*   3. NODE_PATH=.
* */

const server = new http.Server();

server.on('request', handler);

server.listen(3000);

