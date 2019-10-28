const incrementStream = require('./incrementStream');

const  inc = new incrementStream();

inc.on('data', chunk => console.log(chunk.toString()));

inc.write('1');
inc.write('2');
inc.write('3');
inc.write('4');
inc.write('5');

inc.end();





