// let i = 0;

const obj = {};

function handler(req, res) {
  obj[Math.random()] = (new Array(1000000)).fill('*');
  res.end('Hello world');
}

module.exports = handler;
