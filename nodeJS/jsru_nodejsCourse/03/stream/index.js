const IncrementStream = require('./IncrementStream');

const inc = new IncrementStream();

inc.on('data', chunk => console.log(chunk.toString()));

inc.write('1'); // 2
inc.write('2'); // 3
inc.write('3'); // 4
inc.write('4'); // 5

inc.end();

/*
* unit
* functional
* integration/e2e
* */
