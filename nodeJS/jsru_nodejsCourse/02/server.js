const http = require('http');
const fs = require('fs');

const server = new http.Server();

// const buffer = Buffer.from('привет!');

let  data = '';
server.on('request', (req, res) => {
  req.on('data', chunk => {
    data += chunk;
  });
  req.on('end', () => {
    res.end(data);
  })
  // console.log(buffer);
  // res.setHeader('content-type', 'text/plain; charset=utf-8');
  // res.end(buffer);
  // fs.createReadStream('big.png').pipe(res);
  // const file = fs.createReadStream('big.png');
  // file.on('data', chunk => res.write(chunk));
  // file.on('end', () => res.end());
  // file.pipe(res);

});

server.listen(3000);
